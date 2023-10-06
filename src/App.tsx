import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setToDarkMode, setToLightMode } from './store/slices/appThemeSlice';
import { DashboardHome } from './screens';
import Authentication from './screens/authentication';
import PopularProducts from './components/PopularProducts';
import { PopularProductType } from './interfaces/productInterfaces';

const popularProducts: PopularProductType[] = [
	{
		title: 'Crypter NFT',
		type: 'UI kit',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
	{
		title: 'Bento matte 3D',
		type: 'illustration 1.0',
		status: 'inactive',
		imageUrl: '',
		price: '445.54',
	},
	{
		title: 'Excellent material',
		type: '3D chair',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
	{
		title: 'Fleet-travel',
		type: 'shopping kit',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
];

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
				<PopularProducts products={popularProducts} />
			</div>
		</main>
	);
};

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MyApp />,
		children: [],
	},
	{
		path: '/dashboard',
		element: <DashboardHome />,
		children: [],
	},
	{
		path: '/authentication',
		element: <Authentication />,
		children: [],
	},
]);

const App = () => {
	return <RouterProvider router={routes} />;
};

export default App;
