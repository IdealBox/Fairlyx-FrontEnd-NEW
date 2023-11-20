import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { RiErrorWarningFill } from 'react-icons/ri';
import { TbWaveSine } from 'react-icons/tb';
import AppBarChart from '../../../../components/AppBarChart';
import Dropdown from '../../../../components/forms/Dropdown';
import AppLineChart from '../../../../components/AppLineChart';

const Performance = () => {
	const [selectedValue, setSelectedValue] = useState({
		value: 'All time',
		id: '1',
		type: '',
	});
	return (
		<div className="bg-white dark:bg-app-neutral-700 p-5 rounded-xl flex flex-col gap-5">
			<header className="flex items-center justify-between">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Performance
					</h1>
				</div>
				<div>
					<Dropdown
						data={[
							{ value: 'All time', type: '', id: '1' },
							{ value: 'Last month', type: '', id: '2' },
							{ value: 'September', type: '', id: '3' },
						]}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
					/>
				</div>
			</header>

			<div className="flex flex-col gap-y-4 py-8">
				<div className="h-64 w-full">
					<AppLineChart />
				</div>
			</div>
		</div>
	);
};

export default Performance;
