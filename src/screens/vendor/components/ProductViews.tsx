import React, { useState } from 'react';
import Dropdown from '../../../components/forms/Dropdown';
import AppBarChart from '../../../components/AppBarChart';

const ProductViews = () => {
	const [selectedValue, setSelectedValue] = useState({
		id: '1',
		type: 'nothing',
		value: 'Last 7 days',
	});
	return (
		<div className="py-5 flex flex-col gap-y-5 bg-white dark:bg-app-neutral-700 rounded-xl p-5">
			<header className="flex items-center justify-between">
				<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-secondary-3 before:rounded-sm flex items-center gap-2">
					Product views
				</h1>
				<div>
					<Dropdown
						selectedValue={selectedValue}
						data={[
							{ value: 'Last 7 days', id: '1', type: '' },
							{ value: 'Last 14 days', id: '2', type: '' },
						]}
						setSelectedValue={setSelectedValue}
					/>
				</div>
			</header>
			<div className="h-fit py-5 w-full">
				<AppBarChart />
			</div>
		</div>
	);
};

export default ProductViews;
