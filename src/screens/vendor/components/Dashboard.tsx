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
		<div className="flex flex-col lg:flex-row w-full mb-3 overflow-scroll pl-2 pr-3 mt-3 gap-3">
			<div className="flex gap-3 w-full flex-col">
				<Overview />
				<ProductViews />
				<ProTips />
				<GetMoreCustomers />
			</div>
			<div className="flex w-full sm:min-w-[300px] gap-3 flex-col">
				<PopularProducts products={popularProducts} />
				<ProductComments />
				<RefundRequests />
			</div>
		</div>
	);
};

export default Dashboard;
