import React from 'react';
import ProductStats from './ProductStats';
import ProductOverview from './ProductOverview';
import ProductActivity from './ProductActivity';

const Dashboard = () => {
	return (
		<div className="overflow-scroll gap-3 flex-col flex p-5">
			<ProductOverview />
			<div className="flex items-center">
				<div className="flex-1">
					<ProductActivity />
				</div>
			</div>
			<ProductStats />
		</div>
	);
};

export default Dashboard;
