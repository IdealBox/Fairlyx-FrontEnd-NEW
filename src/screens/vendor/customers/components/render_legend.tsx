import { LegendProps } from 'recharts';

export const renderLegend: any = (props: LegendProps) => {
	const { payload } = props;
	return (
		<ul className="hidden sm:flex w-full justify-between p-4">
			{payload &&
				payload.map((entry, index) => (
					<li
						key={`item ${index}`}
						className="flex items-center gap-1.5"
					>
						<span
							style={{ backgroundColor: entry.color }}
							className="h-3 aspect-square rounded-sm"
						></span>
						<span className="text-gray-800 text-xs font-semibold">
							{entry.value}
						</span>
					</li>
				))}
		</ul>
	);
};
