import React from 'react';
import ProductStats from './ProductStats';
import ProductOverview from './ProductOverview';
import ProductActivity from './ProductActivity';
import AppBarChart from '../../../../components/AppBarChart';

const Dashboard = () => {
	return (
		<div className="overflow-scroll gap-3 flex-col flex p-5">
			<div className=" text-3xl dark:text-white/90 font-bold">
				Product dashboard
			</div>
			<div className="">
				<ProductOverview />
			</div>
			<div className="grid grid-cols-[1fr_minmax(100px,500px)] gap-2">
				<ProductActivity />
				<AppBarChart />
			</div>

			<ProductStats />
		</div>
	);
};

export default Dashboard;
