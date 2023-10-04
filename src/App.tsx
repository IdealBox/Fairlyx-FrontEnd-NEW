import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import { DashboardHome } from './screens';

const MyApp = () => {
	const isAuthenticated = useAppSelector(
		(state) => state.user.isAuthenticated
	);
	return (
		<div>
			{isAuthenticated ? (
				<p className="text-green-400">Authenticated</p>
			) : (
				<p className="text-red-400">Not authenticated</p>
			)}
			<h1 className="text-blue-500 font-bold font-inter text-4xl">
				Welcome to fairlyx
			</h1>
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
	}
]);

const App = () => {
	return <RouterProvider router={routes} />;
};

export default App;
