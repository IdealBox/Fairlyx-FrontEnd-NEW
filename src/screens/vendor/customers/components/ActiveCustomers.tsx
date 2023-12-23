import React, { useState } from 'react';
import Dropdown from '../../../../components/forms/Dropdown';
import AutoSizer from 'react-virtualized-auto-sizer';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { colors } from '../../../..';

const ActiveCustomers = () => {
	const data = [
		{
			name: 'Page A',
			uv: 2500,
			pv: 2400,
			ps: 4434,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 2398,
			ps: 4434,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 2500,
			pv: 2300,
			ps: 3434,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 2000,
			ps: 4434,
			amt: 2000,
		},
		{
			name: 'Page A',
			uv: 3700,
			pv: 2400,
			ps: 5000,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 2023,
			ps: 4500,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 2500,
			pv: 2119,
			ps: 3434,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 2408,
			ps: 5005,
			amt: 2000,
		},
		{
			name: 'Page A',
			uv: 4000,
			pv: 2500,
			ps: 5050,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			ps: 3000,
			pv: 2098,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 2900,
			pv: 2400,
			ps: 3434,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 2208,
			ps: 3434,
			amt: 2000,
		},
		{
			name: 'Page A',
			uv: 4000,
			pv: 2400,
			ps: 4700,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 2900,
			pv: 2398,
			ps: 5000,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 3000,
			pv: 2200,
			ps: 4800,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 2308,
			ps: 3200,
			amt: 2000,
		},
	];
	const [selectedValue, setSelectedValue] = useState<{
		id: string;
		value: string;
		type: string;
	}>({ id: '1', value: 'Last 30 days', type: '' });
	return (
		<div className="p-4 rounded-lg bg-white">
			<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-secondary-2 before:rounded-sm flex items-center gap-2">
						Active Customers
					</h1>
				</div>
				<div>
					<Dropdown
						data={[
							{ value: 'Last 28 days', type: '', id: '1' },
							{ value: 'Last 60 days', type: '', id: '2' },
							{ value: 'Last 90 days', type: '', id: '3' },
						]}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
					/>
				</div>
			</header>
			<div style={{ height: 300 }} className="w-full py-8">
				<AutoSizer>
					{({ width, height }: { width: number; height: number }) => {
						return (
							<LineChart
								height={height}
								width={width}
								data={data}
							>
								<YAxis axisLine={false} tickLine={false} />
								<CartesianGrid vertical={false} />
								<Line
									dot={false}
									strokeWidth={3}
									type="monotone"
									dataKey="uv"
									stroke={colors.primary[1]}
								/>
								<Line
									dot={false}
									strokeWidth={3}
									type="monotone"
									dataKey="pv"
									stroke={colors.secondary[4]}
								/>
								<Line
									dot={false}
									strokeWidth={3}
									type="monotone"
									dataKey="ps"
									stroke={colors.primary[2]}
								/>
							</LineChart>
						);
					}}
				</AutoSizer>
			</div>
		</div>
	);
};

export default ActiveCustomers;
