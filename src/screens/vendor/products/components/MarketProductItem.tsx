import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import { BsFillStarFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { PiPencil } from 'react-icons/pi';
import { MessageIcon } from '../../../../components/icons';
import ProductInfo from './ProductInfo';
import { ProductType } from '../../../../interfaces/productInterfaces';
import MobileProductItemMenu from './MobileProductItemMenu';
import ProductItemMenu from './ProductItemMenu';

interface Props {
	product: ProductType;
}

const MarketProductItem = ({ product }: Props) => {
	const [showEditSubMenu, setEditSubMenu] = useState(false);
	const [showRating, setShowRating] = useState(false);
	const [showLikes, setShowLikes] = useState(false);

	const handleShowSubMenu = () => {
		setEditSubMenu((state) => !state);
	};

	const handleMouseLeave = () => {
		setEditSubMenu(false);
	};
	return (
		<>
			{/* Mobile view of a single product list item */}
			<div
				onBlur={handleMouseLeave}
				className="flex sm:hidden flex-col dark:text-app-neutral-400 py-6 border-y dark:border-y-[#ffffff0f] border-y-[#0000000f] gap-2 w-full"
			>
				<div className=" flex gap-2">
					<ProductInfo
						product={product}
						imageOrientation="landscape"
						imageSize={90}
					/>
					<div className=" ml-auto hover:border hover:bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center text-sm">
						<button
							onClick={handleShowSubMenu}
							className="focus:outline-none"
						>
							<FiMoreHorizontal className="w-7 cursor-pointer dark:text-white h-7" />
						</button>
						{showEditSubMenu && <MobileProductItemMenu />}
					</div>
				</div>
				<div className="mt-4 flex flex-col gap-2">
					<div className="flex [&>*]:flex-1 gap-3">
						<div className="text-gray-500">Status</div>
						{product.status === 'active' ? (
							<div>
								<span className="w-fit p-1 px-2 rounded bg-[#32cf7b14] text-primary-2">
									Active
								</span>
							</div>
						) : (
							<div>
								<span className="w-fit p-1 px-2 rounded bg-secondary-1 text-primary-3">
									Inactive
								</span>
							</div>
						)}
					</div>
					<div className="flex gap-3 [&>*]:flex-1">
						<div className="text-gray-500">Views</div>
						<div className="flex gap-1 items-center">
							<div className="rounded-lg bg-gray-200 dark:bg-app-neutral-500 dark:text-white p-1 px-2">
								{product.views}
							</div>
							<div className="w-9 bg-primary-1 rounded h-4"></div>
						</div>
					</div>
					<div className="flex gap-3 [&>*]:flex-1">
						<div className="text-gray-500">Rating</div>
						<div className="flex gap-2 items-center">
							<BsFillStarFill className="text-yellow-500" />
							{product.rating}(82)
						</div>
					</div>
					<div className="flex gap-3 [&>*]:flex-1">
						<div className="text-gray-500">Sales</div>
						<div className="flex items-center gap-1">
							<div className="p-1 px-2 bg-gray-200 dark:bg-app-neutral-500 dark:text-white rounded-lg">
								${product.salesAmount}
							</div>
							<div className="text-primary-2 flex gap-2 items-center">
								<AiOutlineArrowUp className="w-5 h-5" />
								{product.increaseRate}%
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Tablet and Desktop version of product list item */}

			<tr
				onBlur={handleMouseLeave}
				className="hidden sm:table-row w-full hover:bg-gray-100 dark:hover:bg-[#ffffff10] py-4 rounded text-xs md:text-sm [&>*]:py-4"
			>
				<td className="align-top text-gray-200">
					<input type="checkbox" className="h-5 aspect-square" />
				</td>

				<td>
					<ProductInfo product={product} />
				</td>

				{false && (
					<React.Fragment>
						<td>
							{product.status === 'active' ? (
								<div className="w-fit rounded bg-[#32cf7b1a] text-primary-2">
									Active
								</div>
							) : (
								<div className="w-fit rounded bg-secondary-1 text-primary-3">
									Inactive
								</div>
							)}
						</td>

						<td className="text-gray-800 dark:text-white font-semibold">
							<div>${product.price}</div>
						</td>

						<td>
							<div className="flex items-center gap-1">
								<div className="p-1 px-2 bg-gray-200 dark:bg-app-neutral-600 dark:text-white rounded-lg">
									${product.salesAmount}
								</div>
								<div className="text-primary-2 flex gap-1 items-center">
									<AiOutlineArrowUp className="w-5 h-5" />
									{product.increaseRate}%
								</div>
							</div>
						</td>
						<td>
							<div className="flex gap-1 items-center">
								<div className="rounded-lg bg-gray-200 dark:bg-app-neutral-600 dark:text-white p-1 px-2">
									{product.views}k
								</div>
								<div className="w-3 bg-primary-1 rounded h-4"></div>
							</div>
						</td>
						<td>
							<div className="flex gap-1 items-center">
								<div className="rounded-lg bg-gray-200 dark:bg-app-neutral-600 dark:text-white p-1 px-2">
									{product.likes}k
								</div>
								<div className="w-12 bg-primary-3 rounded h-4"></div>
							</div>
						</td>
					</React.Fragment>
				)}
			</tr>
		</>
	);
};

export default MarketProductItem;

{
	/* <div className="relative hidden edit gap-4 mt-9 -ml-14">
						<button className="focus:outline-none">
							<PiPencil className="border w-7 h-7 bg-white dark:bg-[#ffffff20] dark:border-none dark:text-white cursor-pointer rounded-full p-1" />
						</button>
						<button className="focus:outline-none">
							<MessageIcon className="border w-7 h-7 bg-white dark:bg-[#ffffff20] dark:border-none dark:text-white cursor-pointer rounded-full p-1" />
						</button>
						<button
							onClick={handleShowSubMenu}
							className="focus:outline-none"
						>
							<FiMoreHorizontal className="border w-7 h-7 bg-white dark:bg-[#ffffff20] dark:border-none dark:text-white cursor-pointer rounded-full p-1" />
						</button>

						{showEditSubMenu && <ProductItemMenu />} */
}
