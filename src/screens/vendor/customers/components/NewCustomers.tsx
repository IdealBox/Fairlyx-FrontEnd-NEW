import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	Legend,
	TooltipProps,
	LegendProps,
} from 'recharts';
import { colors } from '../../../..';
import { FaSquare } from 'react-icons/fa';

const NewCustomers = () => {
	const data = [
		{
			name: 'Regular customers',
			value: 100,
			dateInterval: 'Aug 30 - Sep 7',
		},
		{
			name: 'Returning customers',
			value: 10,
			dateInterval: 'Sep 30 - Oct 7',
		},
		{ name: 'New customers', value: 9, dateInterval: 'Oct 8 - Nov 7' },
	];

	return (
		<div className="p-4 bg-white dark:bg-app-neutral-700 rounded-lg">
			<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						New customers
					</h1>
				</div>
			</header>
			<div style={{ height: 300 }} className="">
				<AutoSizer>
					{({ width, height }: { width: number; height: number }) => {
						return (
							<PieChart height={height} width={width}>
								<Pie
									data={data}
									innerRadius={50}
									outerRadius={80}
									paddingAngle={4}
									dataKey="value"
									radius={20}
								>
									{data.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={selectColor(entry.name)}
											radius={12}
											strokeOpacity={0}
										/>
									))}
								</Pie>
								<Tooltip content={<CustomTooltip />} />
								<Legend content={renderLegend as any} />
							</PieChart>
						);
					}}
				</AutoSizer>
			</div>
		</div>
	);
};

export default NewCustomers;

const CustomTooltip = ({ active, payload }: TooltipProps<string, string>) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-app-neutral-700 dark:bg-white rounded-lg p-2 text-xs">
				<h3 className="font-semibold text-sm text-gray-100 dark:text-gray-800">
					{payload[0].name}
				</h3>

				<p className="flex gap-1 items-center mt-1">
					<span className="font-semibold flex gap-1 items-center">
						<span
							style={{
								backgroundColor: selectColor(
									payload[0].name as string
								),
							}}
							className="block h-3 w-3 rounded-sm"
						></span>
					</span>
					<span className="text-gray-100 dark:text-gray-600 font-semibold">
						{payload[0].value}
					</span>
				</p>
			</div>
		);
	}

	return null;
};

const renderLegend: any = (props: LegendProps) => {
	const { payload } = props;

	return (
		<div className="flex w-full justify-between items-end p-4 max-w-sm mx-auto">
			{payload &&
				payload.map(
					(entry, index) =>
						index > 0 && (
							<div
								key={`item ${index}`}
								className="flex items-center gap-1.5"
							>
								<div
									className={`h-3 ${
										entry.value.toLowerCase() ===
										'returning customers'
											? 'text-primary-2'
											: 'text-secondary-3'
									}`}
								>
									<FaSquare size={12} />
								</div>
								<span className="text-gray-800 dark:text-gray-100 text-xs font-semibold">
									{entry.value}
								</span>
							</div>
						)
				)}
		</div>
	);
};

const selectColor = (cellName: string) => {
	if (cellName.toLowerCase() === 'new customers') {
		return colors.primary['2'];
	}
	if (cellName.toLowerCase() === 'returning customers') {
		return colors.primary['3'];
	}

	return colors.primary['1'];
};
