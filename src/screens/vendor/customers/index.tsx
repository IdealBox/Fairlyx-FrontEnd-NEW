import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomersList from './components/CustomersList';
import CustomerOverview from './components/Overview';

const CustomersPage = () => {
	const [searchParams] = useSearchParams();
	const tab = searchParams.get('tab');
	return (
		<div className="p-4">
			<h1 className="leading-loose text-4xl font-semibold text-gray-900 dark:text-gray-50">
				Customers
			</h1>
			{tab === 'customers-list' ? (
				<CustomersList />
			) : (
				<CustomerOverview />
			)}
		</div>
	);
};

export default CustomersPage;
