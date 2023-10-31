import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ReleasedProducts from './components/ReleasedProducts';
import DraftProducts from './components/DraftProducts';
import ScheduledProducts from './components/ScheduledProducts';
import ProductComments from './components/ProductComments';

const ProductsPage = () => {
	const [searchParams] = useSearchParams();

	switch (searchParams.get('tab')) {
		case 'draft':
			return <DraftProducts />;
		case 'released':
			return <ReleasedProducts />;
		case 'scheduled':
			return <ScheduledProducts />;
		case 'comments':
			return <ProductComments />;
		default:
			return <Dashboard />;
	}
};

export default ProductsPage;
