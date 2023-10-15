import React, { useState } from 'react';

import { HiArrowLongRight, HiOutlineShoppingBag } from 'react-icons/hi2';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { TbWaveSine } from 'react-icons/tb';
import { RiErrorWarningFill } from 'react-icons/ri';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
	LineChart,
	Line,
	Tooltip,
	XAxis,
	YAxis,
	CartesianGrid,
} from 'recharts';

import Avatar from '../../../components/Avatar';
import Dropdown from '../../../components/forms/Dropdown';

const Overview = () => {
	const [selectedValue, setSelectedValue] = useState({
		value: 'All time',
		id: '1',
		type: '',
	});
	const [customersTabActive, setCustomersTabActive] = useState(true);
	return (
		<div className="bg-white dark:bg-app-neutral-700 p-5 rounded-xl flex flex-col gap-5">
			<header className="flex items-center justify-between">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Overview
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
									<span>Customers</span>
									<RiErrorWarningFill />
								</h3>
								<h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-app-neutral-50 font-bold">
									1024
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
									<span>Income</span>
									<RiErrorWarningFill />
								</h3>
								<h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-app-neutral-50 font-bold">
									256K
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

			<div className="flex flex-col gap-y-4 py-8">
				{!customersTabActive ? (
					<div className="h-64 w-full">
						<IncomeChart />
					</div>
				) : (
					<>
						<div className="flex items-center justify-between py-5">
							<div className="max-w-[15rem]">
								<p className="text-gray-600 dark:text-gray-500">
									Welcome{' '}
									<span className="font-semibold dark:text-app-neutral-50">
										875 customers
									</span>{' '}
									with a personal message 😎
								</p>
							</div>
							<button className="border dark:border-gray-600 py-1.5 px-4 rounded-xl text-gray-700 dark:text-gray-100 font-semibold">
								<span>Send</span>
								<span className="hidden sm:inline">
									{' '}
									message
								</span>
							</button>
						</div>
						<div className="flex gap-2 justify-evenly items-center">
							{[1, 2, 3].map(() => (
								<div>
									<Avatar
										image="https://abegmusic.com/wp-content/uploads/2019/12/Tatiana-Manaois-No-Strings-Mp3-download-588x381.jpg"
										title="Tatiana Manoaous"
										size={50}
									/>
									<h2 className="py-3 text-gray-600 dark:text-gray-300 text-sm">
										Tatiana
									</h2>
								</div>
							))}
							<div className="text-center">
								<button
									style={{ height: 50, width: 50 }}
									className="rounded-full bg-app-neutral-100 dark:bg-shade-300 flex items-center justify-center text-xl dark:text-gray-400"
								>
									<HiArrowLongRight />
								</button>
								<div className="py-3 text-gray-800 dark:text-gray-300 text-sm font-medium">
									View all
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Overview;

const IncomeChart = () => {
	const data = [
		{
			name: 'Jan',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: 'Feb',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: 'Mar',
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: 'Apr',
			uv: 2780,
			pv: 4908,
			amt: 2000,
		},
		{
			name: 'May',
			uv: 1890,
			pv: 9800,
			amt: 2181,
		},
		{
			name: 'Jun',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: 'Jul',
			uv: 3490,
			pv: 8300,
			amt: 2100,
		},
	];
	return (
		<AutoSizer>
			{({ width, height }: { width: number; height: number }) => {
				return (
					<LineChart height={height} width={width} data={data}>
						<Line
							dot={false}
							type="monotone"
							dataKey="pv"
							stroke="#8884d8"
							strokeWidth={3}
						/>
						<XAxis tickLine={false} dataKey={'name'} />
						<YAxis axisLine={false} tickLine={false} />
						<CartesianGrid vertical={false} />
						<Tooltip />
					</LineChart>
				);
			}}
		</AutoSizer>
	);
};
