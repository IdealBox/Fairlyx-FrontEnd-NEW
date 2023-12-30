import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { RiErrorWarningFill } from 'react-icons/ri';
import { TbWaveSine } from 'react-icons/tb';
import Dropdown from '../../../../components/forms/Dropdown';
import AppBarChart from '../../../../components/AppBarChart';

const AffiliateOverview = () => {
	const [customersTabActive, setCustomersTabActive] = useState(true);
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
						Snapshot
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
			<div className="flex gap-4 bg-gray-100 dark:bg-slate-950 rounded-xl p-2">
				<button
					onClick={() => {
						if (!customersTabActive) {
							setCustomersTabActive((state) => !state);
						}
					}}
					className={`flex-1 p-5 focus:outline-none ${
						customersTabActive
							? 'shadow-md rounded-xl bg-white dark:bg-slate-800 '
							: ''
					}`}
				>
					<div className="flex-1 flex lg:flex-row lg:justify-between gap-3 items-start">
						<div className="hidden sm:block rounded-full bg-cyan-200/80 p-2.5 text-xl">
							<HiOutlineShoppingBag />
						</div>
						<div className="flex flex-col gap-2 sm:flex-1 sm:flex-row sm:justify-between">
							<div className="pb-2">
								<h3 className="text-gray-500 flex gap-1 items-center justify-center">
									<span>Clicks</span>
									<RiErrorWarningFill />
								</h3>
								<h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-app-neutral-50 font-bold">
									442
								</h1>
							</div>
							<div className="bg-red-100/90 dark:bg-app-neutral-500/60 text-red-400 font-semibold rounded-lg p-1 text-sm w-fit h-fit flex items-center justify-center gap-1">
								<span>
									<AiOutlineArrowUp />
								</span>
								<span>37.8%</span>
							</div>
						</div>
					</div>
				</button>
				<button
					onClick={() => {
						if (customersTabActive) {
							setCustomersTabActive((state) => !state);
						}
					}}
					className={`flex-1 p-5 focus:outline-none ${
						!customersTabActive
							? 'bg-white dark:bg-slate-800 shadow-md rounded-xl'
							: ''
					}`}
				>
					<div className="flex-1 flex lg:flex-row lg:justify-between gap-3 items-start">
						<div className="hidden sm:block rounded-full bg-slate-300 p-2.5 text-xl">
							<TbWaveSine />
						</div>
						<div className="flex flex-col gap-2 sm:flex-1 sm:flex-row sm:justify-between">
							<div className="pb-2">
								<h3 className="text-gray-500 flex gap-1 items-center justify-center">
									<span>Payouts</span>
									<RiErrorWarningFill />
								</h3>
								<h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-app-neutral-50 font-bold">
									$98
								</h1>
							</div>
							<div className="bg-white/90 dark:bg-app-neutral-600/60 text-green-500 font-semibold rounded-md p-1 text-sm w-fit h-fit flex items-center justify-center gap-1">
								<span>
									<AiOutlineArrowUp />
								</span>
								<span>37.8%</span>
							</div>
						</div>
					</div>
				</button>
			</div>

			<div className="h-fit w-full">
				<AppBarChart />
			</div>
		</div>
	);
};

export default AffiliateOverview;
