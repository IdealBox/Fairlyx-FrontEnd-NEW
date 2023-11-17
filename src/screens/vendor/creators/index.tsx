import React, { useState } from 'react';
import Creator from './components/Creator';
import Dropdown from '../../../components/forms/Dropdown';
import { LuLoader } from 'react-icons/lu';

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

	const [tab, setTab] = useState<'popular' | 'trending'>('popular');
	return (
		<div className="px-4 py-8">
			<h1 className="leading-loose text-4xl font-semibold text-gray-900 dark:text-gray-50">
				Explore creators
			</h1>
			<div className="bg-white rounded-md p-4">
				<header className="border-b border-gray-200 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
					<div className="flex flex-row [&>*]:flex-1 text-center text-sm text-gray-600 font-medium mb-5">
						<div
							onClick={() => {
								if (tab !== 'popular') {
									setTab('popular');
								}
							}}
							className={`py-2 px-4 rounded-md ${
								tab === 'popular' ? '' : 'bg-gray-200'
							}`}
						>
							Popular
						</div>
						<div
							onClick={() => {
								if (tab !== 'trending') {
									setTab('trending');
								}
							}}
							className={`py-2 px-4 rounded-md ${
								tab === 'trending' ? '' : 'bg-gray-200'
							}`}
						>
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
					<div className="divide-y flex flex-col gap-4 [&>*]:pt-4">
						{Array(5)
							.fill(3)
							.map((item, idx) => {
								return <Creator index={idx + 1} />;
							})}
					</div>

					<button className="py-2 px-4 rounded-lg bg-slate-200 border border-gray-200 hover:shadow font-semibold text-gray-800 text-xs w-fit mx-auto">
						<LuLoader className="inline" />
						<span className="pl-2">Load more</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreatorsPage;
