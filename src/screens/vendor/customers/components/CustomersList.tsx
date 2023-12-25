import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';
import Dropdown from '../../../../components/forms/Dropdown';
import Avatar from '../../../../components/Avatar';
import CheckBox from '../../shop/components/CheckBox';

const CustomersList = () => {
	return (
		<div className="bg-white rounded-lg p-4">
			<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Total customers
					</h1>
				</div>
				<div className="flex-1 flex flex-col sm:flex-row gap-4 justify-between">
					<div className="bg-gray-100 rounded-lg flex items-center gap-2 px-4">
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
							className="py-2 px-4 text-gray-600 border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-app-neutral-700
						 rounded-lg dark:text-gray-200 flex-1"
						>
							Active
						</button>
						<button
							className="py-2 px-4 text-gray-600 border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-app-neutral-700
						 rounded-lg dark:text-gray-200 flex-1"
						>
							New
						</button>
						<button
							className="py-2 px-4 text-gray-600 border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-app-neutral-700
						 rounded-lg dark:text-gray-200"
						>
							<FiFilter />
						</button>
					</div>
				</div>
			</header>
			<div>
				<table className="table-auto w-full my-5 text-left divide-y">
					<thead>
						<tr className="text-sm [&>*]:font-normal [&>*]:py-4 text-gray-600">
							<th>
								<CheckBox />
							</th>
							<th>Name</th>
							<th>Email</th>
							<th>Purchase</th>
							<th>Lifetime</th>
							<th>Comments</th>
							<th>Likes</th>
						</tr>
					</thead>
					<tbody className="divide-y">
						{Array(10)
							.fill(1)
							.map((customer, index) => (
								<Customer />
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CustomersList;

const Customer = () => {
	return (
		<tr className="text-gray-500 text-sm [&>*]:py-4">
			<td>
				<CheckBox />
			</td>
			<td>
				<div className="flex items-center gap-2">
					<Avatar
						imageSrc="https://plus.unsplash.com/premium_photo-1673757121159-d380255e6284?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						size={40}
					/>
					Kimboh Lovette Bantar
				</div>
			</td>

			<td>kimbohlovette@gmail.com</td>

			<td>
				<span className="py-1 px-1.5 bg-primary-2/60 text-gray-800 rounded-lg">
					12
				</span>
			</td>

			<td>
				<div className="flex gap-1">
					<span className="py-1 px-1.5 bg-gray-200 text-gray-800 rounded-lg">
						$861
					</span>
					<span className="flex gap-0.5 items-center text-primary-3">
						<AiOutlineArrowDown />
						<span className="">44%</span>
					</span>
				</div>
			</td>

			<td>56</td>
			<td>71</td>
		</tr>
	);
};
