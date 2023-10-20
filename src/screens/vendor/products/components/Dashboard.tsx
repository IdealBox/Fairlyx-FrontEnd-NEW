import React from 'react';
import ProductStats from './ProductStats';
import ProductOverview from './ProductOverview';

const Dashboard = () => {
	return <div className="overflow-scroll gap-3 flex-col flex p-5">
		<div className="font-bold text-5xl dark:text-white">Product dashboard</div>
		<ProductOverview />
		<ProductStats />
	</div>;
};

export default Dashboard;
