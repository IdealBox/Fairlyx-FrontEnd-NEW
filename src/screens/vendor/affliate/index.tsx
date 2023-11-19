import { popularProducts } from '../../../interfaces/productInterfaces';
import PopularProducts from '../components/PopularProducts';
import AffiliateOverview from './components/AffiliateOverview';
import CreateLink from './components/CreateLink';
import Performance from './components/Performance';
import ProductAnalytics from './components/ProductAnalytics';

const AffiliateCenterPage = () => {
	return (
		<div className="py-8 px-4">
			<h1 className="leading-loose text-4xl font-semibold text-gray-900 dark:text-gray-50">
				Affliate center
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
				<div>
					<div>
						<AffiliateOverview />
					</div>
					<div className="mt-2">
						<Performance />
					</div>
					<div className="mt-2">
						<ProductAnalytics />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<CreateLink />
					<PopularProducts products={popularProducts} />
				</div>
			</div>
		</div>
	);
};

export default AffiliateCenterPage;
