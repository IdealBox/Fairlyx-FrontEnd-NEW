import AutoSizer from 'react-virtualized-auto-sizer';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';

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

export default AppLineChart;
