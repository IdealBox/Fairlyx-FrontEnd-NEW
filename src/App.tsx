import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setToDarkMode, setToLightMode } from './store/slices/appThemeSlice';
import { DashboardHome } from './screens';
import Authentication from './screens/authentication';

const MyApp = () => {
	const dispatch = useAppDispatch();
	const isAuthenticated = useAppSelector(
		(state) => state.user.isAuthenticated
	);
	useEffect(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			dispatch(setToDarkMode);
		} else {
			dispatch(setToLightMode);
		}
	}, [dispatch]);

	const isDarkMode = useAppSelector((state) => state.theme.darkMode);

	return (
		<div className={isDarkMode ? 'dark' : ''}>
			<h1 className='text-blue-500 dark:text-red-500'>It's working</h1>
		</div>
	);
};

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MyApp />,
		children: [

		],
	}, {
		path: '/dashboard',
		element: <DashboardHome />,
		children: []
	}, {
		path: '/authentication',
		element: <Authentication />,
		children: []
	}
]);

const App = () => {
	return <RouterProvider router={routes} />;
};

export default App;
