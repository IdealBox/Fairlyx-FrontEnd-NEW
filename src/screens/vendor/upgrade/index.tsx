import React from 'react';
import PlanCard, { Props } from './components/PlanCard';
import FrequentlyAskQuestions from './components/FrequentlyAskQuestions';

const planProps: Props = {
	planType: 'pro',
	caption: 'Pro shop and tools to set up your profile.',
	recommended: false,
	rate: 12,
	features: [
		'Extended shop profile',
		'Customer communication tools',
		'Unlimited promotion posts',
		'Unlimited products uploads',
		'Specials offers promo tool',
		'Analytics and insights',
		'Bulk message to all customers',
	],
	buttonText: 'Upgrade now',
};

const UpgradeToProPage = () => {
	return (
		<div className="w-full p-4 sm:p-8">
			<div>
				<h1 className="leading-loose text-4xl font-semibold text-gray-900 dark:text-gray-50">
					Upgrade to Pro
				</h1>
				<div className="w-full bg-white dark:bg-app-neutral-700 flex flex-col lg:flex-row lg:divide-x divide-gray-100 dark:divide-gray-800 rounded-lg overflow-hidden sm:p-4 lg:p-8">
					<div className="flex-1">
						<PlanCard {...planProps} />
					</div>
					<div className="flex-1">
						<PlanCard {...planProps} />
					</div>
				</div>
			</div>
			<FrequentlyAskQuestions />
		</div>
	);
};

export default UpgradeToProPage;
