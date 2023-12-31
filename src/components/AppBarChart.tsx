import React, { useState } from 'react';
import {
	Bar,
	BarChart,
	Cell,
	Tooltip,
	TooltipProps,
	XAxis,
	YAxis,
} from 'recharts';
import { BiSolidSquareRounded } from 'react-icons/bi';
import {
	NameType,
	ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import AutoSizer from 'react-virtualized-auto-sizer';
import Dropdown from './forms/Dropdown';

const AppBarChart = () => {
	const [selectedValue, setSelectedValue] = useState({
		id: '1',
		type: 'nothing',
		value: 'Last 7 days',
	});
	const data = [
		{
			name: 'Day1',
			pv: 34,
			amt: 10,
		},
		{
			name: 'Day2',
			pv: 24,
			amt: 13,
		},
		{
			name: 'Day3',
			pv: 45,
			amt: 39,
		},
		{
			name: 'Day4',
			pv: 32,
			amt: 39,
		},
		{
			name: 'Day5',
			pv: 38,
			amt: 34,
		},
		{
			name: 'Day6',
			pv: 49,
			amt: 60,
		},
		{
			name: 'Day7',
			pv: 24,
			amt: 53,
		},
	];
	return (
		<div className="py-5 flex flex-col gap-y-5 bg-white dark:bg-app-neutral-700 rounded-xl p-5">
			<div className="h-96 py-5 w-full">
				<AutoSizer>
					{({ height, width }: { height: number; width: number }) => {
						return (
							<BarChart data={data} width={width} height={height}>
								<Bar dataKey="pv" maxBarSize={40}>
									{data.map((entry, index) => (
										<Cell
											className="hover:bg-transparent"
											cursor="pointer"
											fill={colorBars(entry.pv)}
											key={`cell-${index}`}
										/>
									))}
								</Bar>
								<XAxis axisLine={false} tickLine={false} />
								<YAxis axisLine={false} tickLine={false} />
								<Tooltip
									cursor={{ fill: 'transparent' }}
									content={<CustomToolTip />}
								/>
							</BarChart>
						);
					}}
				</AutoSizer>
			</div>
		</div>
	);
};

export default AppBarChart;

const colorBars = (pv: number) => {
	if (pv < 30) {
		return '#FF6A55';
	}
	if (pv < 40) {
		return '#83BF6E';
	} else {
		return '#2A85FF';
	}
};

const CustomToolTip = ({
	active,
	payload,
}: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		return (
			<div className="p-2 rounded-md dark:bg-white bg-app-neutral-800 text-xs">
				<p className="font-medium text-gray-100 dark:text-gray-600">
					24 September
				</p>
				<div className="flex items-center gap-2 mt-2">
					<BiSolidSquareRounded className="text-primary-2" />
					<span className="text-gray-100 dark:text-gray-600 font-semibold">
						{(payload[0].value as number) * 12}K
					</span>
				</div>
			</div>
		);
	}
	return null;
};
