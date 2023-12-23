import React, { useState } from 'react';
import Dropdown from '../../../../components/forms/Dropdown';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { colors } from '../../../..';
import { renderLegend } from './render_legend';

const TrafficChannel = () => {
	const data = [
		{
			di: 3800,
			se: 200,
			ma: 180,
			sm: 200,
			ot: 3445,
			amt: 2,
		},
		{
			di: 3500,
			se: 750,
			ot: 833,
			sm: 350,
			amt: 4,
		},
		{
			di: 2500,
			ma: 1100,
			sm: 160,
			ot: 140,
			amt: 6,
		},
		{
			di: 2950,
			se: 202,
			sm: 180,
			ot: 18,
			ma: 343,
			amt: 8,
		},
		{ di: 2345, sm: 1200, se: 1500, ma: 1600, ot: 500, amt: 10 },
		{
			sm: 1000,
			rp: 800,
			ma: 800,
			di: 1800,
			ot: 323,
			amt: 10,
		},
		{
			sm: 750,
			se: 800,
			ma: 190,
			ot: 100,
			di: 1445,
			amt: 12,
		},
	];
	const [selectedValue, setSelectedValue] = useState<{
		id: string;
		value: string;
		type: string;
	}>({ id: '1', value: 'Last 7 days', type: '' });
	return (
		<div className="p-4 rounded-lg bg-white">
			<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Traffic channel
					</h1>
				</div>
				<div>
					<Dropdown
						data={[
							{ value: 'Last 7 days', type: '', id: '1' },
							{ value: 'Last 30 days', type: '', id: '2' },
							{ value: 'Last 60 days', type: '', id: '3' },
						]}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
					/>
				</div>
			</header>
			<div style={{ height: 350 }} className="mt-8">
				<AutoSizer>
					{({ width, height }: { height: number; width: number }) => {
						return (
							<BarChart
								height={height}
								width={width}
								data={data}
								margin={{
									left: 0,
								}}
								maxBarSize={40}
							>
								<CartesianGrid
									horizontal={false}
									vertical={false}
								/>
								<YAxis
									style={{ fontSize: 12 }}
									tickLine={false}
									axisLine={false}
								/>
								<XAxis
									tickLine={false}
									axisLine={false}
									dataKey={'amt'}
									style={{ fontSize: 12 }}
								/>
								<Legend
									content={renderLegend as any}
									iconType="square"
									iconSize={8}
								/>

								<Bar
									name="Direct"
									dataKey="di"
									stackId="a"
									fill={colors.primary[1]}
									maxBarSize={40}
								/>
								<Bar
									name="Search"
									dataKey="se"
									stackId="a"
									fill={colors.primary[3]}
									maxBarSize={40}
								/>
								<Bar
									name="Market"
									dataKey="ma"
									stackId="a"
									fill={colors.secondary[1]}
									maxBarSize={40}
								/>
								<Bar
									name="Social media"
									dataKey="sm"
									stackId="a"
									fill={colors.secondary[4]}
									maxBarSize={40}
								/>
							</BarChart>
						);
					}}
				</AutoSizer>
			</div>
		</div>
	);
};

export default TrafficChannel;
