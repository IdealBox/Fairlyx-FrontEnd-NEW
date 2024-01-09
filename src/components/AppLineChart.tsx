import AutoSizer from 'react-virtualized-auto-sizer';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	TooltipProps,
} from 'recharts';
import { colors } from '..';
import { FaSquare } from 'react-icons/fa';

const AppLineChart = () => {
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
							stroke={colors.primary[1]}
							strokeWidth={4}
						/>
						<XAxis
							tickLine={false}
							dataKey={'name'}
							padding={{ left: 5 }}
						/>
						<YAxis axisLine={false} tickLine={false} />
						<CartesianGrid vertical={false} strokeWidth={0.5} />
						<Tooltip cursor={false} content={<CustomToolTip />} />
					</LineChart>
				);
			}}
		</AutoSizer>
	);
};

export default AppLineChart;

const CustomToolTip = ({ active, payload }: TooltipProps<string, string>) => {
	return payload && active && payload.length ? (
		<div className="py-2 px-4 rounded-lg border dark:border-gray-800 bg-app-neutral-600 dark:bg-app-neutral-700">
			<h3 className="pb-0.5 font-semibold text-gray-200">Customers</h3>
			<div className="flex items-center gap-2">
				<FaSquare size={12} color={colors.secondary[4]} />
				<span className="text-gray-200">{payload[0].value}</span>
			</div>
		</div>
	) : null;
};
