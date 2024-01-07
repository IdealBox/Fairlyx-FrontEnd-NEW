import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';
import Avatar from '../../../../components/Avatar';
import CheckBox from '../../shop/components/CheckBox';
import CustomerDetail from './CustomerDetail';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectCustomer } from '../../../../store/slices/customerSlice';

const CustomersList = () => {
	const selectedCustomer = useAppSelector(
		(state) => state.customer.selectedCustomer
	);

	const dispatch = useAppDispatch();
	return (
		<div className="bg-white dark:bg-app-neutral-700 rounded-lg p-4 relative">
			<header className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Customer list
					</h1>
				</div>
				<div className="flex-1 flex flex-col md:flex-row gap-4 justify-between">
					<div className="bg-gray-100 dark:bg-app-neutral-600 caret-blue-400 rounded-lg flex items-center gap-2 px-4">
						<BiSearch className="text-gray-500" size={16} />
						<input
							className="bg-transparent focus:outline-none py-2 min-w-0"
							type="search"
							name="search-customers"
							id="search-customers"
							placeholder="Search by name or email"
						/>
					</div>
					<div className="flex items-center gap-4">
						<button
							className="py-2 px-4 text-gray-600 border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-app-neutral-600
						 rounded-lg dark:text-gray-200 flex-1"
						>
							Active
						</button>
						<button
							className="py-2 px-4 text-gray-600 border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-app-neutral-600
						 rounded-lg dark:text-gray-200 flex-1"
						>
							New
						</button>
						<button
							className="hidden md:block py-2 px-4 text-gray-600 border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-app-neutral-600
						 rounded-lg dark:text-gray-200"
						>
							<FiFilter />
						</button>
					</div>
				</div>
			</header>
			<div className="flex items-start gap-8">
				<div
					className={`${
						!selectedCustomer ? 'flex-1' : 'w-1/3 hidden md:block'
					} `}
				>
					<table className="table-auto w-full my-5 text-left divide-y divide-gray-200 dark:divide-gray-800 border-spacing-y-4">
						<thead>
							<tr className="font-medium text-sm text-gray-600 dark:text-gray-400">
								<th className="hidden sm:table-cell">
									<CheckBox />
								</th>
								<th>Name</th>
								{!selectedCustomer && (
									<>
										<th className="hidden sm:table-cell">
											Email
										</th>
										<th className="hidden sm:table-cell">
											Purchase
										</th>
										<th>Lifetime</th>
										<th className="hidden lg:table-cell">
											Comments
										</th>
										<th className="hidden lg:table-cell">
											Likes
										</th>
									</>
								)}
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 dark:divide-gray-800">
							{Array(10)
								.fill(1)
								.map((customer, index) => (
									<Customer
										onSelect={() => {
											dispatch(
												selectCustomer({
													selectedCustomer: {
														name: 'Lovette',
													},
												})
											);
										}}
										key={index}
									/>
								))}
						</tbody>
					</table>
					<div className="grid place-items-center">
						<button className="py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-100 dark:hover:bg-app-neutral-600 text-sm font-semibold hover:bg-gray-100">
							Load more
						</button>
					</div>
				</div>
				{selectedCustomer && (
					<div className="flex-1">
						<CustomerDetail />
					</div>
				)}
			</div>
		</div>
	);
};

export default CustomersList;

interface CustomerProps {
	onSelect: () => void;
}
const Customer = ({ onSelect }: CustomerProps) => {
	const selectedCustomer = useAppSelector(
		(state) => state.customer.selectedCustomer
	);
	return (
		<tr
			onClick={() => onSelect()}
			className="group text-gray-500 hover:bg-gray-100 dark:hover:bg-app-neutral-600 font-medium [&>*]:py-4"
		>
			<td className="hidden sm:table-cell">
				<CheckBox />
			</td>
			<td>
				<div className="flex items-center gap-2">
					<Avatar
						imageSrc="https://plus.unsplash.com/premium_photo-1673757121159-d380255e6284?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						size={40}
					/>
					<div>
						<h2 className="dark:text-gray-300">Kimboh Lovette</h2>
						<span className="text-gray-500 text-sm">@lovette</span>
					</div>
				</div>
			</td>

			{!selectedCustomer && (
				<>
					<td className="hidden sm:table-cell dark:text-gray-500">
						kimbohlovette@gmail.com
					</td>

					<td className="hidden sm:table-cell">
						<span className="py-1 px-1.5 bg-secondary-4 text-gray-800 rounded-lg">
							12
						</span>
					</td>

					<td>
						<div className="flex gap-1">
							<span className="py-1 px-1.5 bg-gray-200 dark:bg-gray-600/50 dark:text-gray-50 dark:group-hover:bg-gray-950 text-gray-800 rounded-lg">
								$861
							</span>
							<span className="flex gap-0.5 items-center text-primary-3">
								<AiOutlineArrowDown />
								<span className="">44%</span>
							</span>
						</div>
					</td>

					<td className="hidden lg:table-cell">56</td>
					<td className="hidden lg:table-cell">71</td>
				</>
			)}
		</tr>
	);
};
