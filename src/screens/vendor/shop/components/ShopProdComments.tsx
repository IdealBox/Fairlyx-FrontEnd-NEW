import React from 'react';
import Avatar from '../../../../components/Avatar';
import { BsStarFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import { MdClose } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';

interface Props {
	onClose: () => void;
}

const ShopProdComments = ({ onClose }: Props) => {
	return (
		<div className="py-4">
			<div className="flex items-center justify-between">
				<div className="py-2 px-4 flex items-center gap-2 font-semibold text-sm text-gray-800 rounded-lg">
					<span className="py-1 px-2 rounded-md bg-secondary-2 text-gray-800">
						4
					</span>
					<span className="dark:text-gray-100">Comments</span>
				</div>
				<button
					onClick={() => {
						onClose();
					}}
					className="pr-4 text-gray-600 dark:text-gray-100"
				>
					<MdClose />
				</button>
			</div>
			<div>
				<Comment />
				<Comment />
				<Comment />
				<Comment />
			</div>
		</div>
	);
};

export default ShopProdComments;

const Comment = () => {
	return (
		<div className="flex items-start px-4 py-4">
			<div>
				<Avatar
					imageSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					size={64}
				/>
			</div>
			<div className="px-4 py-2">
				<div>
					<div className="flex justify-between items-start">
						<div className="">
							<h2 className="text-gray-800 dark:text-gray-100 text-sm font-semibold">
								Stephon Schumm
							</h2>
							<span className="text-gray-500 dark:text-gray-400 text-xs">
								@ivawelch
							</span>
						</div>

						<div className="flex items-center gap-4 w-fit">
							<span className="text-xs font-medium text-gray-400">
								2h
							</span>
							<span>
								<span className="font-semibold text-gray-800 dark:text-gray-100 text-sm mr-1">
									4.0
								</span>
								<BsStarFill className="text-amber-500 inline" />
							</span>
						</div>
					</div>

					<p className="text-sm text-gray-600 dark:text-gray-200">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Optio provident recusandae aperiam ipsam in
						voluptatum magni voluptatem, fugit culpa reprehenderit
						esse est excepturi nam accusamus alias unde eligendi
						animi sequi!
					</p>
					<div className="text-xs flex items-center gap-5 py-4 text-gray-500 font-medium">
						<button className="hover:text-gray-800 dark:hover:text-gray-400">
							<CiHeart className="inline mr-2 text-lg" />
							Like
						</button>
						<button className="hover:text-gray-800 dark:hover:text-gray-400">
							<TfiReload className="inline mr-2" />
							Reply
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
