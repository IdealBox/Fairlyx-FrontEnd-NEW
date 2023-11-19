import React from 'react';

import { popularProducts } from '../../../interfaces/productInterfaces';
import GetMoreCustomers from './GetMoreCustomers';
import Overview from './Overview';
import PopularProducts from './PopularProducts';
import ProductComments from './ProductComments';
import ProductViews from './ProductViews';
import RefundRequests from './RefundRequests';
import ProTips from './ProTips';

const Dashboard = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] overflow-scroll pl-2 pr-3 my-3 gap-3">
			<div className="flex gap-3 flex-col">
				<Overview />
				<ProductViews />
				<ProTips />
				<GetMoreCustomers />
			</div>
			<div className="flex flex-col gap-3">
				<PopularProducts products={popularProducts} />
				<ProductComments />
				<RefundRequests />
			</div>
		</div>
	);
};

export default Dashboard;
