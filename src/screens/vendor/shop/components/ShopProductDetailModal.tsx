import React, { useState } from 'react';

import { BsDownload, BsStarFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { GoShareAndroid } from 'react-icons/go';
import { MdClose, MdOutlineArrowForward } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';

import Avatar from '../../../../components/Avatar';
import { useAppDispatch } from '../../../../store/hooks';
import { selectItem } from '../../../../store/slices/productSlice';
import ProductCard from './ProductCard';
import ShopProdComments from './ShopProdComments';

interface Props {
	onClose: () => void;
}
const ShopProductDetailModal = ({ onClose }: Props) => {
	const [tab, setTab] = useState<'product' | 'comments'>('product');
	const dispatch = useAppDispatch();
	return (
		<div className="fixed top-0 left-0 bg-gray-100 w-full h-full z-[1000] p-4 sm:px-8 overflow-y-scroll">
			<div className="flex items-center justify-between">
				<button className="py-2 px-4 bg-white font-semibold text-sm text-gray-800 rounded-lg">
					Edit product
				</button>
				<button
					onClick={() => {
						onClose();
					}}
					className="w-fit p-2 bg-white font-semibold text-gray-800 rounded-full text-xl"
				>
					<MdClose />
				</button>
			</div>
			<div className="w-full flex items-start justify-center rounded-lg mt-8 max-w-6xl mx-auto bg-white">
				<div
					className={`bg-white p-4 w-full rounded-md ${
						tab === 'comments' ? 'flex-1 hidden md:block' : ''
					}`}
				>
					<div>
						<header>
							<nav className="py-4 flex flex-col sm:flex-row sm:justify-between gap-y-4">
								<div className="flex items-center gap-4 flex-wrap">
									<button
										onClick={() => {
											if (tab !== 'product') {
												setTab('product');
											}
										}}
										className={`py-2 px-4 rounded-lg text-sm text-gray-500 dark:text-gray-400  hover:text-gray-700 font-semibold ${
											tab === 'product'
												? 'bg-gray-200 text-gray-800 dark:bg-app-neutral-600'
												: ''
										}`}
									>
										Products
									</button>
									<button
										onClick={() => {
											if (tab !== 'comments') {
												setTab('comments');
											}
										}}
										className={`py-2 px-4 rounded-lg text-sm text-gray-500 dark:text-gray-400  hover:text-gray-700 font-semibold ${
											tab === 'comments'
												? 'bg-gray-200 text-gray-800 dark:bg-app-neutral-600'
												: ''
										}`}
									>
										Comments
									</button>
								</div>
								<div className="flex items-center justify-end gap-2 text-gray-600 dark:text-gray-400">
									<button className="flex items-center gap-2 text-sm p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-app-neutral-600 focus:outline-none">
										<FaHeart className="text-red-400" />
										<span>45</span>
									</button>
									<div className="">
										<button className="flex items-center gap-4 py-2 px-4 rounded-lg text-sm bg-blue-500 hover:bg-blue-600 text-white font-semibold">
											<span>$89</span>

											<span>Download</span>
											<BsDownload />
										</button>
									</div>
								</div>
							</nav>
						</header>
						<div className="py-4">
							<div>
								<h1 className="font-semibold text-xl text-gray-800">
									Fleet - Travel shopping UI design kit
								</h1>
								<h3 className="mb-5 text-gray-500 font-medium text-sm">
									Elegant product mockup for your next project
								</h3>
								<div className="flex items-center flex-wrap gap-4">
									<div className="flex items-center gap-2">
										<Avatar
											size={40}
											imageSrc="https://media.istockphoto.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.jpg?s=2048x2048&w=is&k=20&c=d0YfJV1OEmHAHuHCqGkZftvLhW2-Xp_30eO967BGXE8="
										/>
										<span className="text-sm">
											<span
												className="
										text-gray-500 font-semibold text-xs px-1"
											>
												by
											</span>
											<span className="text-gray-800 font-semibold">
												Chelsie Haley
											</span>
										</span>
									</div>
									<div className="flex items-center">
										<BsStarFill className="text-amber-500 inline" />
										<span className="text-gray-800 font-semibold px-1 text-sm">
											4.8
										</span>
										<span className="text-gray-500 font-medium text-sm">
											(59)
										</span>
									</div>
								</div>
							</div>
							<div className="mt-8 w-full rounded-xl overflow-hidden max-h-fit aspect-video">
								<img
									src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									className="object-center object-cover w-full"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr] gap-4 py-8">
								<div>
									<div>
										<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
											Overview
										</h1>
										<p className="mt-5">
											Lorem ipsum dolor sit amet
											consectetur, adipisicing elit. Culpa
											quas explicabo minus eligendi illum
											natus itaque consequuntur laboriosam
											iste ratione, sapiente alias libero
											praesentium quo repellendus nulla
											similique eveniet odio!
										</p>
										<p className="mt-5">
											Lorem ipsum dolor sit amet
											consectetur, adipisicing elit. Culpa
											quas explicabo minus eligendi illum
											natus itaque consequuntur laboriosam
											iste ratione, sapiente alias libero
											praesentium quo repellendus nulla
											similique eveniet odio!
										</p>
										<p className="mt-5">
											Lorem ipsum dolor sit amet
											consectetur, adipisicing elit. Culpa
											quas explicabo minus eligendi illum
											natus itaque consequuntur
											laboriosam.
										</p>
									</div>
								</div>
								<div>
									<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-secondary-2 before:rounded-sm flex items-center gap-2">
										Features
									</h1>
									<ul className="divide-y">
										{Array(4)
											.fill(1)
											.map((item, key) => (
												<li
													key={key}
													className="flex items-center gap-2 text-sm font-semibold text-gray-900 py-4"
												>
													<IoCheckmarkSharp className="text-green-500" />
													<span>
														128 prebuilt screens
													</span>
												</li>
											))}
									</ul>
								</div>
							</div>
							<div className="mt-2 border-t pt-8">
								<header className="flex item-center justify-between">
									<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-secondary-2 before:rounded-sm flex items-center gap-2">
										MOre like this
									</h1>
									<button className="py-2 px-4 text-sm border rounded-lg font-medium">
										<span>View all</span>
										<MdOutlineArrowForward className="ml-1 inline" />
									</button>
								</header>
								<div className="gap-5 py-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
									{Array(3)
										.fill(2)
										.map((item, key) => (
											<ProductCard
												key={key}
												onSelect={() => {
													dispatch(selectItem(item));
												}}
											/>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
				{tab === 'product' ? (
					<div className="hidden sm:flex flex-col gap-2 px-5">
						<Avatar
							size={54}
							imageSrc="https://media.istockphoto.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.jpg?s=2048x2048&w=is&k=20&c=d0YfJV1OEmHAHuHCqGkZftvLhW2-Xp_30eO967BGXE8="
						/>

						<Avatar size={54} nameInitials={<FiFigma />} />
						<Avatar size={54} nameInitials={<GoShareAndroid />} />
					</div>
				) : (
					<div className="md:border-l w-full md:w-2/5 h-full">
						<ShopProdComments
							onClose={() => {
								setTab('product');
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default ShopProductDetailModal;
