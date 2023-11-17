import React, { useState } from 'react';
import Creator from './components/Creator';
import Dropdown from '../../../components/forms/Dropdown';

const CreatorsPage = () => {
	const [selectedValue, setSelectedValue] = useState<{
		value: string;
		id: string;
		type: string;
	}>({
		value: 'Best sellers',
		id: '1',
		type: '',
	});
	return (
		<div className="px-4 py-8">
			<h1 className="leading-loose text-4xl font-semibold text-gray-900 dark:text-gray-50">
				Explore creators
			</h1>
			<div className="bg-white rounded-md p-4">
				<header className="border-b border-gray-200 py-4 flex flex-col">
					<div className="flex flex-row [&>*]:flex-1 text-center text-sm text-gray-600 font-medium mb-5">
						<div className="py-2 px-4 rounded-md">Popular</div>
						<div className="py-2 px-4 bg-gray-200 rounded-md">
							Trending
						</div>
					</div>
					<Dropdown
						data={[
							{
								value: 'Something else',
								id: '2',
								type: '',
							},
							{
								value: 'Best sellers',
								id: '1',
								type: '',
							},
						]}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
					/>
				</header>
				<div className="flex flex-col gap-5 py-4">
					<p className="text-xs font-semibold text-gray-400">
						Viewing 5 of 5000+ creators in the market
					</p>
					<Creator />
					<Creator />
				</div>
			</div>
		</div>
	);
};

export default CreatorsPage;
