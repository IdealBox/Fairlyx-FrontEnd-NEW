import React, { ReactHTMLElement, RefObject, useRef, useState } from 'react';
import Dropdown from '../../../../components/forms/Dropdown';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const ProductActivity = () => {
	const [selectedValue, setSelectedValue] = useState({
		id: '1',
		value: 'Last week',
		type: '',
	});

	const [currentColumn, setCurrentColumn] = useState({
		value: 'Products',
		id: '1',
		type: '',
	});

	return (
		<div className="p-4 bg-white dark:bg-app-neutral-700 rounded-xl">
			<header className="flex items-center justify-between">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-secondary-2 before:rounded-sm flex items-center gap-2">
						Product Activity
					</h1>
				</div>
				<div className="hidden sm:block">
					<Dropdown
						// data={[
						// 	{ value: 'All time', type: '', id: '1' },
						// 	{ value: 'Last month', type: '', id: '2' },
						// 	{ value: 'September', type: '', id: '3' },
						// ]}
						data={[
							{ value: 'Last week', type: '', id: '1' },
							{ value: 'Last 2 weeks', type: '', id: '2' },
							{ value: 'Last 4 weeks', type: '', id: '3' },
						]}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
					/>
				</div>
			</header>
			<div>
				<table className="table-auto w-full my-5 text-left divide-y dark:divide-gray-600 hidden sm:table">
					<thead>
						<tr className="text-sm [&>*]:font-medium [&>*]:py-4 text-gray-600 dark:text-gray-400">
							<th>Week</th>
							<th>Products</th>
							<th>Views</th>
							<th>Likes</th>
							<th>Comments</th>
						</tr>
					</thead>
					<tbody className="divide-y">
						<tr className="text-gray-500 dark:text-gray-400 text-sm [&>*]:py-4">
							<td>25 Sept - 1 Oct</td>

							<td>
								<div className="flex gap-1 text-primary-2 dark:text-gray-800 font-medium">
									<span className="py-1 px-1.5 bg-secondary-4/60 dark:bg-shade-100 rounded-lg">
										8
									</span>
									<span className="hidden md:flex gap-0.5 items-center">
										<AiOutlineArrowUp />
										<span className="">44%</span>
									</span>
								</div>
							</td>

							<td>
								<div className="flex gap-1">
									<span className="py-1 px-1.5 bg-primary-4/60 text-gray-800 rounded-lg">
										86k
									</span>
									<span className="hidden md:flex gap-0.5 items-center text-primary-2">
										<AiOutlineArrowUp />
										<span className="">44%</span>
									</span>
								</div>
							</td>

							<td>
								<div className="flex gap-1">
									<span className="py-1 px-1.5 bg-primary-2/60 text-gray-800 rounded-lg">
										86k
									</span>
									<span className="hidden md:flex gap-0.5 items-center text-primary-3">
										<AiOutlineArrowDown />
										<span className="">44%</span>
									</span>
								</div>
							</td>

							<td>
								<div className="flex gap-1">
									<span className="py-1 px-1.5 bg-amber-400/60 rounded-lg">
										86k
									</span>
									<span className="hidden md:flex gap-0.5 items-center text-primary-3">
										<AiOutlineArrowDown />
										<span className="">56%</span>
									</span>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

				{/* Table to show on mobile devices */}

				<table className="table-auto w-full my-5 text-left divide-y sm:hidden">
					<thead>
						<tr className="text-sm [&>*]:font-normal [&>*]:py-4 text-gray-600">
							<th>Week</th>
							<th>
								<div className="sm:hidden w-fit ml-auto">
									<Dropdown
										data={[
											{
												value: 'Products',
												type: '',
												id: '1',
											},
											{
												value: 'Likes',
												type: '',
												id: '2',
											},
											{
												value: 'Views',
												type: '',
												id: '3',
											},
											{
												value: 'Comments',
												type: '',
												id: '4',
											},
										]}
										selectedValue={currentColumn}
										setSelectedValue={setCurrentColumn}
									/>
								</div>
							</th>
						</tr>
					</thead>
					<tbody className="divide-y">
						<tr className="text-gray-500 text-sm [&>*]:py-4">
							<td>25 Sept - 1 Oct</td>

							{currentColumn.value === 'Products' && (
								<td>
									<div className="flex gap-1 text-primary-2">
										<span className="py-1 px-1.5 bg-secondary-4/60 rounded-lg">
											8
										</span>
										<span className="flex gap-0.5 items-center">
											<AiOutlineArrowUp />
											<span className="">44%</span>
										</span>
									</div>
								</td>
							)}
							{currentColumn.value === 'Likes' && (
								<td>
									<div className="flex gap-1">
										<span className="py-1 px-1.5 bg-primary-2/60 text-gray-800 rounded-lg">
											86k
										</span>
										<span className="flex gap-0.5 items-center text-primary-3">
											<AiOutlineArrowDown />
											<span className="">44%</span>
										</span>
									</div>
								</td>
							)}
							{currentColumn.value === 'Views' && (
								<td>
									<div className="flex gap-1">
										<span className="py-1 px-1.5 bg-primary-2/60 text-gray-800 rounded-lg">
											86k
										</span>
										<span className="flex gap-0.5 items-center text-primary-3">
											<AiOutlineArrowDown />
											<span className="">44%</span>
										</span>
									</div>
								</td>
							)}
							{currentColumn.value === 'Comments' && (
								<td>
									<div className="flex gap-1">
										<span className="py-1 px-1.5 bg-amber-400/60 rounded-lg">
											86k
										</span>
										<span className="flex gap-0.5 items-center text-primary-3">
											<AiOutlineArrowDown />
											<span className="">56%</span>
										</span>
									</div>
								</td>
							)}
						</tr>
					</tbody>
				</table>
				<div className="sm:hidden w-fit">
					<Dropdown
						data={[
							{ value: 'Last week', type: '', id: '1' },
							{ value: 'Last 2 weeks', type: '', id: '2' },
							{ value: 'Last 4 weeks', type: '', id: '3' },
						]}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductActivity;
