import React, { useState } from 'react';
import { CiTwitter } from 'react-icons/ci';
import { TiSocialPinterest } from 'react-icons/ti';
import { IoLogoInstagram } from 'react-icons/io5';
import { FiFilter } from 'react-icons/fi';
import ProductCard from './ProductCard';
import Avatar from '../../../../components/Avatar';
import Dropdown from '../../../../components/forms/Dropdown';
import { LuLoader, LuPlus } from 'react-icons/lu';
import { useAppDispatch } from '../../../../store/hooks';
import { selectItem } from '../../../../store/slices/productSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ShopFollowers from './ShopFollowers';
import ShopFollowing from './ShopFollowing';
import ProductsPopupMenu from './ProductsPopupMenu';

const ShopModal = () => {
	const [selectedValue, setSelectedValue] = useState({
		id: '1',
		value: 'Most recent',
		type: '',
	});

	const [searchParams] = useSearchParams();
	const tab = searchParams.get('tab');
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [showFilterMenu, setShowFilterMenu] = useState(false);

	return (
		<div className="bg-white dark:bg-app-neutral-700 rounded-lg p-4">
			<header className="divide-y dark:divide-gray-800 relative">
				<div>
					<div className="flex flex-col md:flex-row  md:items-center gap-y-5 mb-5">
						<div className="flex-1 flex items-start gap-4">
							<div className="h-fit w-fit relative">
								<Avatar
									size={72}
									imageSrc="https://media.istockphoto.com/id/1411162580/photo/edgy-young-black-woman-with-trendy-braided-hairstyle-against-an-orange-studio-background.webp?s=612x612&w=is&k=20&c=m78wES_kuLChgwGQNQqnArLWIp-OqMtcnq9C21Bl_GQ="
								/>
								<div className="absolute -bottom-0.5 right-1 rounded-full bg-blue-500 text-white h-fit w-fit border-2 border-gray-50 dark:border-gray-800">
									<LuPlus />
								</div>
							</div>
							<div>
								<h2 className="py-2 text-xl font-semibold text-gray-800 dark:text-gray-100 ">
									Chelsie Haley
								</h2>
								<p className="text-gray-500 text-sm font-medium">
									Dream big. Think different. Do hard things!
								</p>
							</div>
						</div>
						<div className="flex items-start justify-between flex-wrap gap-2 text-2xl">
							<button className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 dark:hover:bg-app-neutral-600 focus:outline-none">
								<CiTwitter />
							</button>
							<button className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 dark:hover:bg-app-neutral-600 focus:outline-none">
								<IoLogoInstagram />
							</button>
							<button className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 dark:hover:bg-app-neutral-600 focus:outline-none">
								<TiSocialPinterest />
							</button>
							<button className="py-2 px-4 rounded-lg text-sm font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none text-white">
								Follow
							</button>
						</div>
					</div>
				</div>
				<nav className="relative py-4 flex flex-col sm:flex-row sm:justify-between gap-y-4">
					{showFilterMenu && (
						<div className="absolute z-[1000] top-2 right-0 w-full sm:w-fit sm:min-w-max">
							<ProductsPopupMenu
								onClose={() => {
									setShowFilterMenu(false);
								}}
							/>
						</div>
					)}
					<div className="flex items-center justify-between flex-wrap">
						<button
							onClick={() => {
								navigate('/vendor/shop?tab=products');
							}}
							className="py-2 px-4 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-app-neutral-600 hover:text-gray-700"
						>
							Products
						</button>
						<button
							onClick={() => {
								navigate('/vendor/shop?tab=followers');
							}}
							className="py-2 px-4 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-app-neutral-600 hover:text-gray-700"
						>
							Followers
						</button>
						<button
							onClick={() => {
								navigate('/vendor/shop?tab=following');
							}}
							className="py-2 px-4 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-app-neutral-600 hover:text-gray-700"
						>
							Following
						</button>
					</div>
					<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
						<div className="flex-1">
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

						<button
							onClick={() => {
								setShowFilterMenu((state) => !state);
							}}
							className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-app-neutral-600 focus:outline-none"
						>
							<FiFilter />
						</button>
					</div>
				</nav>
			</header>
			<div>
				{tab === 'following' ? (
					<ShopFollowing />
				) : tab === 'followers' ? (
					<ShopFollowers />
				) : (
					<Products />
				)}
			</div>
			<div className="flex justify-center items-center">
				<button className="py-2 px-4 rounded-lg bg-slate-200 dark:bg-app-neutral-800 border border-gray-200 dark:border-gray-700 hover:shadow font-semibold text-gray-800 dark:text-gray-50 text-xs w-fit mx-auto">
					<LuLoader className="inline" />
					<span className="pl-2">Load more</span>
				</button>
			</div>
		</div>
	);
};

export default ShopModal;

const Products = () => {
	const dispatch = useAppDispatch();
	return (
		<div className="gap-5 py-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
			{Array(12)
				.fill(2)
				.map((item, key) => (
					<ProductCard
						onSelect={() => {
							dispatch(selectItem(item));
						}}
						key={key}
					/>
				))}
		</div>
	);
};
