import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import Dropdown from '../../../../components/forms/Dropdown';
import { RiErrorWarningFill } from 'react-icons/ri';

const ProductAnalytics = () => {
	return (
		<div className="bg-white dark:bg-app-neutral-700 rounded-xl">
			<table className="table-auto w-full my-5 text-left">
				<thead>
					<tr className="text-sm [&>*]:font-medium [&>*]:py-4 text-gray-600 dark:text-gray-400 [&>*]:px-4">
						<th>Date</th>
						<th>
							Impressions
							<RiErrorWarningFill className="ml-0.5 inline" />
						</th>
						<th>
							Clicks
							<RiErrorWarningFill className="ml-0.5 inline" />
						</th>
						<th className="hidden sm:table-cell">Total earnings</th>
						<th className="hidden sm:table-cell">
							EPC <RiErrorWarningFill className="ml-0.5 inline" />
						</th>
					</tr>
				</thead>
				<tbody className="odd:[&>*]:bg-gray-100 dark:odd:[&>*]:bg-app-neutral-600/40">
					{Array(4)
						.fill(2)
						.map((row, index) => (
							<TableRow key={index} />
						))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductAnalytics;

const TableRow = () => {
	return (
		<tr className="text-gray-500 text-sm [&>*]:py-4 first:[&>*]:px-4">
			<td className="dark:text-gray-400">Sept 25, 2021</td>

			<td>
				<div className=" dark:text-gray-800 font-medium flex flex-col gap-2">
					<span className="py-1 px-1.5 flex items-center gap-2  text-gray-800 dark:text-gray-100 font-medium rounded-lg">
						<span className="py-0.5 px-1 bg-gray-200 dark:bg-app-neutral-600/60 rounded-lg">
							345
						</span>
						<div className="h-2 w-4 bg-primary-2 rounded-sm"></div>
					</span>
					<span className="flex gap-0.5 items-center text-primary-2">
						<AiOutlineArrowUp />
						<span className="">44%</span>
					</span>
				</div>
			</td>

			<td>
				<div className="flex flex-col gap-1">
					<span className="py-1 px-1.5 flex items-center gap-2  text-gray-800 font-medium rounded-lg">
						<span className="py-0.5 px-1 bg-gray-200 dark:bg-app-neutral-600/60 dark:text-gray-100 rounded-lg">
							24
						</span>
						<div className="h-2 w-8 bg-primary-1 rounded-sm"></div>
					</span>
					<span className="flex gap-0.5 items-center text-primary-2">
						<AiOutlineArrowUp />
						<span className="">44%</span>
					</span>
				</div>
			</td>

			<td className="hidden sm:table-cell">
				<div className="flex gap-1">
					<span className="py-1 px-1.5 text-gray-800 dark:text-gray-100 font-medium rounded-lg">
						$0.00
					</span>
				</div>
			</td>

			<td className="hidden sm:table-cell">
				<div className="flex gap-1">
					<span className="py-1 px-1.5 text-gray-800 dark:text-gray-100 font-medium rounded-lg">
						$0.13
					</span>
				</div>
			</td>
		</tr>
	);
};
