import React, { useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Legend,
	Tooltip,
	ComposedChart,
} from 'recharts';
import { colors } from '../../../..';

const TopCountries = () => {
	const data = [
		{
			name: 'Cameroon',
			uv: 590,
			pv: 12,
			amt: 1400,
		},
		{
			name: 'Congo',
			uv: 868,
			pv: 34,
			amt: 1506,
		},
		{
			name: 'Nigeria',
			uv: 1397,
			pv: 22,
			amt: 989,
		},
		{
			name: 'Uganda',
			uv: 1480,
			pv: 24,
			amt: 1228,
		},
		{
			name: 'Egypt',
			uv: 1520,
			pv: 20,
			amt: 1100,
		},
		{
			name: 'Gabon',
			uv: 1400,
			pv: 10,
			amt: 1700,
		},
	];
	return (
		<div className="p-4 bg-white dark:bg-app-neutral-700 rounded-lg">
			<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Top countries
					</h1>
				</div>
			</header>
			<div style={{ height: 400 }} className="w-full">
				<AutoSizer>
					{({ width, height }: { width: number; height: number }) => {
						return (
							<ComposedChart
								layout="vertical"
								width={width}
								height={height}
								data={data}
								barSize={30}
								margin={{ left: 5, right: 5 }}
							>
								<CartesianGrid
									horizontal={false}
									className="stroke-gray-100 dark:stroke-gray-800"
								/>
								<XAxis
									padding={{ left: 50 }}
									type="number"
									axisLine={false}
									tickLine={false}
									tickFormatter={(value, index) =>
										`${value}%`
									}
									fontSize={12}
								/>
								<YAxis
									dataKey="name"
									type="category"
									axisLine={false}
									tickLine={false}
								/>

								<Bar
									dataKey="pv"
									fill={colors.primary[2]}
									radius={4}
								/>
							</ComposedChart>
						);
					}}
				</AutoSizer>
			</div>
		</div>
	);
};

export default TopCountries;
