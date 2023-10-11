import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setToDarkMode, setToLightMode } from './store/slices/appThemeSlice';
import { DashboardHome } from './screens';
import Authentication from './screens/authentication';
import Overview from './components/Overview';
import ProductViews from './components/ProductViews';

const MyApp = () => {
	const dispatch = useAppDispatch();
	const isAuthenticated = useAppSelector(
		(state) => state.user.isAuthenticated
	);

	// match system light/dark mode base on the system theme
	const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
	matchDark.addEventListener('change', (e) => {
		if (e.matches) {
			dispatch(setToDarkMode());
		} else {
			dispatch(setToLightMode());
		}
	});

	// get current app theme from redux store
	const isDarkMode = useAppSelector((state) => state.theme.darkMode);

	return (
		<main className={`font-inter ${isDarkMode ? 'dark' : ''}`}>
			<div className="bg-app-neutral-100 dark:bg-app-neutral-800 min-h-screen">
				<Outlet />
			</div>
		</main>
	);
};

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MyApp />,
		children: [
			{
				path: '/dashboard',
				element: <DashboardHome />,
				children: [
					// all pages in the dashboard can go here
					// {
					// 	path: '',
					// 	element: <ProductViews />,
					// },
				],
				// loader:()=>{

				// }
			},
			{
				path: '/auth',
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
