import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import Dropdown from '../../../../components/forms/Dropdown';

const ProductAnalytics = () => {
	return (
		<div className="bg-white rounded-xl px-4 md:px-8 py-4">
			<table className="table-auto w-full my-5 text-left dark:divide-gray-600">
				<thead>
					<tr className="text-sm [&>*]:font-medium [&>*]:py-4 text-gray-600 dark:text-gray-400">
						<th>Date</th>
						<th>Impressions</th>
						<th>Clicks</th>
						<th>Total earnings</th>
						<th>EPC</th>
					</tr>
				</thead>
				<tbody className="odd:[&>*]:bg-gray-100">
					{Array(6)
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
		<tr className="text-gray-500 dark:text-gray-400 text-sm [&>*]:py-4">
			<td>Sept 25, 2021</td>

			<td>
				<div className=" dark:text-gray-800 font-medium">
					<span className="py-1 px-1.5 bg-gray-50 rounded-lg ">
						345
					</span>
					<span className="hidden md:flex gap-0.5 items-center text-primary-2">
						<AiOutlineArrowUp />
						<span className="">44%</span>
					</span>
				</div>
			</td>

			<td>
				<div className="">
					<span className="py-1 px-1.5  text-gray-800 font-medium rounded-lg">
						24
					</span>
					<span className="hidden md:flex gap-0.5 items-center text-primary-2">
						<AiOutlineArrowUp />
						<span className="">44%</span>
					</span>
				</div>
			</td>

			<td>
				<div className="flex gap-1">
					<span className="py-1 px-1.5 text-gray-800 font-medium rounded-lg">
						$0.00
					</span>
				</div>
			</td>

			<td>
				<div className="flex gap-1">
					<span className="py-1 px-1.5 text-gray-800 font-medium rounded-lg">
						$0.00
					</span>
				</div>
			</td>
		</tr>
	);
};
