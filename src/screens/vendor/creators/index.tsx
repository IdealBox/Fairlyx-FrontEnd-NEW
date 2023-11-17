import React from 'react';
import Creator from './components/Creator';

const CreatorsPage = () => {
	return (
		<div className="px-4 py-8">
			<h1 className="leading-loose text-4xl font-semibold text-gray-900 dark:text-gray-50">
				Explore creators
			</h1>
			<header></header>
			<div className="flex flex-col gap-5">
				<Creator />
				<Creator />
			</div>
		</div>
	);
};

export default CreatorsPage;
