import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setToDarkMode, setToLightMode } from './store/slices/appThemeSlice';
import Home from './screens/vendor/home/Home';

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
			<div className="dark:bg-neutral-950 min-h-screen">
				<Home />
			</div>
		</main>
	);
};

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MyApp />,
		children: [
			// All route configurations go here
		],
	},
]);

const App = () => {
	return <RouterProvider router={routes} />;
};

export default App;
