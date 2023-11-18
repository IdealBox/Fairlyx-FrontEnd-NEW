import { popularProducts } from '../../../interfaces/productInterfaces';
import PopularProducts from '../components/PopularProducts';
import AffiliateOverview from './components/AffiliateOverview';
import Performance from './components/Performance';

const AffiliateCenterPage = () => {
	return (
		<div className="py-8 px-4">
			<h1 className="leading-loose text-4xl font-semibold text-gray-900 dark:text-gray-50">
				Affliate center
			</h1>
			<div className="grid grid-cols-[2fr_1fr] gap-4">
				<div>
					<div>
						<AffiliateOverview />
					</div>
					<div className="mt-2">
						<Performance />
					</div>
				</div>
				<div>
					<PopularProducts products={popularProducts} />
				</div>
			</div>
		</div>
	);
};

export default AffiliateCenterPage;
