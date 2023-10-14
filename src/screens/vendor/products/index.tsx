import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ReleasedProducts from './components/ReleasedProducts';
import DraftProducts from './components/DraftProducts';
import ScheduledProducts from './components/ScheduledProducts';

const ProductsPage = () => {
	const [searchParams] = useSearchParams();

	switch (searchParams.get('tab')) {
		case 'draft':
			return <DraftProducts />;
		case 'released':
			return <ReleasedProducts />;
		case 'scheduled':
			return <ScheduledProducts />;
		default:
			return <Dashboard />;
	}
};

export default ProductsPage;
