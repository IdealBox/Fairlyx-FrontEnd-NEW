import React from 'react';
import { LuBadgePercent } from 'react-icons/lu';

const ShareProducts = () => {
	return (
		<div className="p-4 rounded-lg bg-white">
			<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Traffic channel
					</h1>
				</div>
				<div>
					<button className="text-xs px-4 py-2 rounded-lg shadow border border-gray-100 focus:outline-none hover:bg-gray-300 font-medium flex items-center gap-1.5 text-gray-900">
						<span>Go to promote</span>
						<LuBadgePercent size={18} className="inline" />
					</button>
				</div>
			</header>
		</div>
	);
};

export default ShareProducts;
