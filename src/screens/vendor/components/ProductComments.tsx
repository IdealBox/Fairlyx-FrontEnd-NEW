import React from 'react';
import { BiMessageAltDetail } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiLink2 } from 'react-icons/fi';
import Avatar from '../../../components/Avatar';

const ProductComments = () => {
	return (
		<div className="w-full py-5 flex flex-col gap-y-5 bg-white dark:bg-app-neutral-700 rounded-xl p-5">
			<header className="flex items-center justify-between">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-secondary-3 before:rounded-sm flex items-center gap-2">
						Comments
					</h1>
				</div>
			</header>
			<div className="divide-y dark:divide-gray-700">
				{[1, 2, 3].map((val, index) => (
					<SingleComment key={index} />
				))}
			</div>
			<button className="place-self-center border hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-900 rounded-xl px-4 py-2 text-gray-600 dark:text-gray-50 font-semibold w-full">
				All Views
			</button>
		</div>
	);
};

export default ProductComments;

const SingleComment = () => {
	return (
		<div className="py-6 flex gap-x-2">
			<div className="">
				<Avatar size={50} nameInitials="KL" />
			</div>
			<div className="flex-1">
				<div>
					<div className="flex justify-between">
						<div className="flex gap-2">
							<h1 className="text-gray-700 dark:text-gray-50 font-bold">
								Kimboh
							</h1>
							<p className="text-gray-400 dark:text-gray-500">
								@lovette
							</p>
						</div>
						<span className="text-gray-400 text-sm font-medium">
							19h
						</span>
					</div>
					<div className="py-2">
						<p className="text-gray-400">
							On{' '}
							<span className="text-gray-800 dark:text-gray-100 font-semibold">
								Travel-shopping
							</span>
						</p>
						<p className="text-gray-600 font-medium dark:text-gray-300 py-2 leading-6">
							This product is amazing. I recommend it.
						</p>
					</div>
				</div>
				<div className="flex justify-between text-gray-400 text-xl">
					<button className="p-1.5 rounded-full hover:bg-shade-100/60">
						<BiMessageAltDetail />
					</button>
					<button className="p-1.5 rounded-full hover:bg-shade-100/60">
						<AiOutlineHeart />
					</button>
					<button className="p-1.5 rounded-full hover:bg-shade-100/60">
						<FiLink2 />
					</button>
				</div>
			</div>
		</div>
	);
};
