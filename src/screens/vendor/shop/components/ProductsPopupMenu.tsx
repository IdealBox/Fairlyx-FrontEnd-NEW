import React, { useState } from 'react';
import { SearchIcon } from '../../../../components/icons';
import Dropdown from '../../../../components/forms/Dropdown';
import { MdClose, MdOutlineCheck } from 'react-icons/md';
import CheckBox from './CheckBox';

interface Props {
	onClose: () => void;
}
const ProductsPopupMenu = ({ onClose }: Props) => {
	const [selectedValue, setSelectedValue] = useState({
		value: 'Featured',
		id: '1',
		type: '',
	});
	return (
		<div className="shadow-2xl bg-white dark:bg-app-neutral-800 rounded-lg px-4 w-full border border-gray-100 dark:border-none">
			<div className="flex flex-col divide-y dark:divide-gray-800 [&>*]:py-5">
				<div className="flex justify-between items-center pb-2">
					<div>
						<h1 className="text-gray-800 dark:text-app-neutral-50 font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
							Showing 9 of 32 products
						</h1>
					</div>
					<div>
						<button
							onClick={() => {
								onClose();
							}}
							className="w-fit p-1.5 font-semibold text-gray-800 rounded-full text-xl bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
						>
							<MdClose />
						</button>
					</div>
				</div>
				<div>
					<div className="flex items-center py-2 px-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
						<div className="pr-2">
							<SearchIcon className="text-gray-600" />
						</div>
						<input
							type="search"
							className="focus:outline-none bg-transparent w-full text-sm text-gray-600 dark:text-gray-100"
							placeholder="Search conversions"
						/>
					</div>
				</div>
				<div>
					<h3 className="text-sm font-semibold text-gray-800 dark:text-gray-50 py-2">
						Sort by
					</h3>
					<Dropdown
						data={[
							{
								id: '1',
								value: 'Most recent',
								type: '',
							},
							{
								id: '2',
								value: 'Most ordered',
								type: '',
							},
							{
								id: '3',
								value: 'Most viewed',
								type: '',
							},
						]}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
					/>
				</div>
				<div>
					<h3 className="text-sm font-semibold text-gray-600 dark:text-gray-200 py-2">
						Showing
					</h3>
					<ul className="flex flex-col gap-y-2 w-full">
						<li className="text-gray-900 dark:text-gray-50 text-sm font-semibold  flex items-center justify-between">
							<span>All products</span>
							<CheckBox checked />
						</li>
						<li className="text-gray-900 dark:text-gray-50 text-sm font-semibold  flex items-center justify-between">
							<span>UI Kit</span>
							<CheckBox />
						</li>
						<li className="text-gray-900 dark:text-gray-50 text-sm font-semibold  flex items-center justify-between">
							<span>Illustration</span>
							<CheckBox checked />
						</li>
						<li className="text-gray-900 dark:text-gray-50 text-sm font-semibold  flex items-center justify-between">
							<span>Wireframe kit</span>
							<CheckBox />
						</li>
						<li className="text-gray-900 dark:text-gray-50 text-sm font-semibold  flex items-center justify-between">
							<span>Icons</span>
							<CheckBox />
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 py-2">
						Price
					</h3>
					slider
				</div>
				<div>
					<h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 py-2">
						Rating
					</h3>
					<Dropdown
						data={[
							{
								id: '1',
								value: 'Most recent',
								type: '',
							},
							{
								id: '2',
								value: 'Most ordered',
								type: '',
							},
							{
								id: '3',
								value: 'Most viewed',
								type: '',
							},
						]}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
					/>
				</div>
			</div>
			<div className="flex items-center justify-end gap-4 pb-4">
				<button className="py-2 px-4 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-100 border border-gray-100 dark:border-gray-800 shadow">
					Reset
				</button>
				<button className="py-2 px-4 rounded-lg text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow">
					Apply
				</button>
			</div>
		</div>
	);
};

export default ProductsPopupMenu;
