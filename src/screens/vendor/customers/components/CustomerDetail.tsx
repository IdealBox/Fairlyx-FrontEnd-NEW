import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useAppDispatch } from '../../../../store/hooks';
import { selectCustomer } from '../../../../store/slices/customerSlice';
import Avatar from '../../../../components/Avatar';
import { BsPlus } from 'react-icons/bs';
import { BiDotsHorizontal, BiSolidMessageSquareDetail } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { IoLinkOutline } from 'react-icons/io5';
import { CiTwitter } from 'react-icons/ci';
import { PiPinterestLogo, PiWarningCircleFill } from 'react-icons/pi';
import { RiFacebookLine } from 'react-icons/ri';
import { SlSocialInstagram } from 'react-icons/sl';
import Editor from '../../../../components/Editor';

const CustomerDetail = () => {
	const dispatch = useAppDispatch();
	return (
		<div className="w-full py-8">
			<header className="py-4 flex justify-end items-center">
				<button
					onClick={() => {
						dispatch(selectCustomer(null));
					}}
					className="focus:outline-none text-gray-600 bg-gray-100 dark:text-gray-200 dark:bg-gray-800 shadow-lg p-2 rounded-full"
				>
					<IoMdClose />
				</button>
			</header>
			<div className="@container">
				<div className="flex flex-col @lg:flex-row items-start justify-between gap-4">
					<div className="flex items-center gap-4">
						<div>
							<Avatar
								imageSrc="https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								size={72}
							/>
						</div>
						<div>
							<h2 className="text-xl font-semibold text-gray-800 dark:text-gray-50">
								Chelsie Haley
							</h2>
							<h5 className="text-gray-400">@chelsie</h5>
						</div>
					</div>
					<div className="flex items-center gap-2 *:flex-1  ">
						<button className="border-2 shadow py-2 rounded-lg px-4 text-gray-800 font-semibold dark:bg-gray-900 dark:hover:bg-gray-950 border-gray-800 dark:text-white">
							<span className="hidden @sm:inline-block">
								Follow
							</span>
							<BsPlus size={24} className="inline" />
						</button>
						<button className="flex items-center gap-1  bg-blue-500 hover:bg-blue-600 py-2 rounded-lg px-4 text-white font-semibold">
							Message
							<BiSolidMessageSquareDetail
								size={20}
								className="inline"
							/>
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-8 pt-8">
					<div className="flex flex-col gap-3 w-full">
						<h1 className="text-gray-800 dark:text-gray-100 font-semibold text-sm flex items-center gap-2">
							Private notes <PiWarningCircleFill />
						</h1>
						<Editor />
					</div>
					<div>
						<ul className="flex flex-col divide-y dark:divide-gray-800 *:py-4 font-semibold">
							<li className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
								<MdOutlineMail
									className="text-gray-500"
									size={20}
								/>
								kimbohlovette@gmail.com
							</li>
							<li className="text-gray-500">
								<ul className="flex items-center gap-8 dark:text-gray-400">
									<li>
										<CiTwitter size={28} />
									</li>
									<li>
										<SlSocialInstagram size={24} />
									</li>
									<li>
										<PiPinterestLogo size={28} />
									</li>
									<li>
										<RiFacebookLine size={28} />
									</li>
								</ul>
							</li>
							<li className="flex items-center gap-4 text-gray-700 dark:text-gray-400">
								<IoLinkOutline
									className="text-gray-500 dark:text-gray-400"
									size={20}
								/>
								robot.co
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-gray-800 dark:text-gray-100 flex items-center gap-4 font-semibold">
							Purchase history <PiWarningCircleFill />
						</h2>
						<div className="w-full">
							<table className="w-full">
								<thead className="hidden sm:table-header-group">
									<tr className="text-left font-normal text-gray-600">
										<th>Product</th>
										<th>Price</th>
										<th className="hidden lg:table-cell">
											Date
										</th>
									</tr>
								</thead>
								<tbody className="divide-y dark:divide-gray-800 [&_td]:py-4">
									{Array(4)
										.fill(0)
										.map((rec, key) => (
											<ProductRecord key={key} />
										))}
								</tbody>
							</table>
							<div className="grid place-items-center mt-4">
								<button className="py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-100 dark:hover:bg-app-neutral-600 text-sm font-semibold hover:bg-gray-100">
									Load more
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerDetail;

const ProductRecord = () => {
	return (
		<tr className="hover:bg-gray-200 dark:hover:bg-gray-700">
			{/* Single data cell to display on mobile */}
			<td className="sm:hidden">
				<div className="flex gap-4 rounded-lg cursor-pointer">
					<div>
						<img
							className="max-w-28 rounded-lg object-center object-cover aspect-square"
							src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</div>
					<div className="flex-1 flex flex-col px-2">
						<div className="flex items-center justify-between">
							<h1 className="font-semibold text-gray-800 dark:text-gray-200">
								Product title
							</h1>
							<button className="outline-none rounded-full p-1 hover:bg-gray-200 textgray-600">
								<BiDotsHorizontal />
							</button>
						</div>
						<a className="text-sm text-gray-500 font-medium block py-2">
							ui8.net/product_link
						</a>
						<div>
							<span className="px-2 py-1.5 text-gray-800 text-sm font-semibold bg-secondary-3 rounded-lg">
								$30.54
							</span>
						</div>
					</div>
				</div>
			</td>
			{/*-=========End of cell(s) to render on mobile======== */}

			{/* ========Cells to show from tablet devices upward======== */}
			<td className="hidden sm:table-cell">
				<div className="flex gap-2 ">
					<div>
						<img
							className="max-w-14 rounded-lg object-center object-cover aspect-square"
							src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</div>
					<div>
						<h1 className="font-semibold text-gray-800 dark:text-gray-200">
							Product title
						</h1>
						<a className="text-sm text-gray-500 font-medium py-1">
							ui8.net/product/product_link
						</a>
					</div>
				</div>
			</td>
			<td className="hidden sm:table-cell">
				<span className="px-2 py-1.5 text-gray-800 text-sm font-semibold bg-primary-2/80 rounded-lg">
					$30.54
				</span>
			</td>
			<td className="hidden lg:table-cell text-gray-600 dark:text-gray-400">
				Jan 23, 2022
			</td>
			{/* ===End of cells to show from tablet devices upward== */}
		</tr>
	);
};
