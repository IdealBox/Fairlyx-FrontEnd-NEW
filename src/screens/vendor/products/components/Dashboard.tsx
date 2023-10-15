import React from 'react';
import ProductStats from './ProductStats';
import ProductOverview from './ProductOverview';

const Dashboard = () => {
	return <div className="w-full overflow-scroll gap-3 flex-col flex p-5">
		<ProductOverview />
		<ProductStats />
	</div>;
};

export default Dashboard;
