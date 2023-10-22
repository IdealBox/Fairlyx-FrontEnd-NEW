import React from 'react';
import { BiLink } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { PiPencil } from 'react-icons/pi';

const ProductItemMenu = () => {
	return (
		<div className="border p-3 rounded-xl shadow-xl bg-white dark:bg-app-neutral-800 dark:border-none z-50 mt-8 w-[270px]">
			<div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 dark:hover:bg-transparent dark:hover:text-white text-gray-500 hover:text-black rounded-lg">
				<PiPencil className="w-5 h-5" />
				Edit title and description
			</div>
			<div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 dark:hover:bg-transparent dark:hover:text-white text-gray-500 hover:text-black rounded-lg">
				<BiLink className="w-5 h-5" />
				Get sharable link
			</div>
			<div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 dark:hover:bg-transparent dark:hover:text-white text-gray-500 hover:text-black rounded-lg">
				<MdDelete className="w-5 h-5" />
				Delete forever
			</div>
		</div>
	);
};

export default ProductItemMenu;
