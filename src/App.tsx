import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setToDarkMode, setToLightMode } from "./store/slices/appThemeSlice";
import { DashboardHome } from "./screens";
import Authentication from "./screens/authentication";
import ProductViews from "./screens/vendor/components/ProductViews";
import VendorPage from "./screens/vendor";
import Dashboard from "./screens/vendor/components/Dashboard";
import ProductsPage from "./screens/vendor/products";
import PreviewCard from "./screens/vendor/products/components/PreviewCard";
import BottomSection from "./screens/vendor/products/components/BottomSection";
import AddProduct from "./screens/vendor/AddProduct";
import Promote from "./screens/vendor/Promote";
import NotificationsPage from "./screens/vendor/notifications";
import UpgradeToProPage from "./screens/vendor/upgradeToPro";

const MyApp = () => {
  const dispatch = useAppDispatch();

  // match system light/dark mode base on the system theme
  const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
  matchDark.addEventListener("change", (e) => {
    if (e.matches) {
      dispatch(setToDarkMode());
    } else {
      dispatch(setToLightMode());
    }
  });

  // get current app theme from redux store
  const isDarkMode = useAppSelector((state) => state.theme.darkMode);

  return (
    <main className={`font-inter ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-app-neutral-100 dark:bg-app-neutral-800 min-h-screen">
        <Outlet />
        <PreviewCard />
        <BottomSection />
      </div>
    </main>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MyApp />,
    children: [
      {
        path: "/vendor",
        element: <VendorPage />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
          },
          {
            path: "products",
            element: <ProductsPage />,
          },
          {
            path: "promote",
            element: <Promote />,
          },{
            path: "notifications",
            element: <NotificationsPage />,
          },
          {
            path: "upgrade",
            element: <UpgradeToProPage />
          },
          {
            path: "income",
            element: <>Income</>,
          },
        ],
      },
      {
        path: "/authentication",
        element: <Authentication />,
        children: [],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
