import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
	Cell,
	Label,
	Legend,
	LegendProps,
	Pie,
	PieChart,
	Tooltip,
	TooltipProps,
} from 'recharts';
import { colors } from '../../../../index';
import { PiDesktop, PiDeviceMobileSpeaker } from 'react-icons/pi';
import { HiMiniDeviceTablet } from 'react-icons/hi2';

const TopDevices = () => {
	const data = [
		{ name: 'Desktop', value: 100, dateInterval: 'Aug 30 - Sep 7' },
		{ name: 'Tablet', value: 10, dateInterval: 'Sep 30 - Oct 7' },
		{ name: 'Mobile', value: 9, dateInterval: 'Oct 8 - Nov 7' },
	];

	return (
		<div
			className="p-4 bg-white dark:bg-app-neutral-700
		 rounded-lg"
		>
			<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Top devices
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
									outerRadius={85}
									paddingAngle={4 }
									dataKey="value"
								>
									{data.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={selectColor(entry.name)}
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

export default TopDevices;

const CustomTooltip = ({ active, payload }: TooltipProps<string, string>) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-app-neutral-700 rounded-lg text-gray-100 p-2 text-xs">
				<h3 className="font-semibold text-sm text-gray-100">
					{payload[0].payload.dateInterval}
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
						{payload[0].name}:
					</span>
					<span className="">{payload[0].value}</span>
				</p>
			</div>
		);
	}

	return null;
};

export const renderLegend: any = (props: LegendProps) => {
	const { payload } = props;

	const total = payload
		?.map((item) => item.payload?.value | 0)
		.reduce((a, b) => a + b, 0);
	return (
		<div className="flex w-full justify-between items-end p-4 max-w-sm mx-auto">
			{payload &&
				payload.map((entry, index) => (
					<div
						key={`item ${index}`}
						className="flex flex-col items-center gap-1.5"
					>
						<div>
							{entry.value.toLowerCase() === 'mobile' && (
								<PiDeviceMobileSpeaker
									style={{ color: entry.color }}
									className="text-2xl"
								/>
							)}
							{entry.value.toLowerCase() === 'tablet' && (
								<HiMiniDeviceTablet
									style={{ color: entry.color }}
									className="text-2xl"
								/>
							)}
							{entry.value.toLowerCase() === 'desktop' && (
								<PiDesktop
									style={{ color: entry.color }}
									className="text-2xl"
								/>
							)}
						</div>
						<span className="text-gray-800 dark:text-gray-300 text-xs font-semibold">
							{entry.value}
						</span>
						<span className="text-gray-800 dark:text-gray-100 text-xl font-semibold">
							{total
								? `${Math.floor(
										(entry.payload?.value * 100) / total
								  )}%`
								: `0%`}
						</span>
					</div>
				))}
		</div>
	);
};

const selectColor = (cellName: string) => {
	if (cellName.toLowerCase() === 'mobile') {
		return colors.primary['2'];
	}
	if (cellName.toLowerCase() === 'tablet') {
		return colors.primary['3'];
	}

	return colors.primary['1'];
};
