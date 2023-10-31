import React from 'react';
import { BiLink } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { PiPencil } from 'react-icons/pi';
import { MessageIcon } from '../../../../components/icons';

const MobileProductItemMenu = () => {
	return (
		<div className="border p-3 dark:border-app-neutral-800 dark:hover:bg-none rounded-xl dark:bg-app-neutral-800 shadow-[#00000031] shadow-xl bg-white relative -ml-[270px] mt-[270px] w-[270px]">
			<div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg">
				<PiPencil className="w-5 h-5" />
				Edit Product
			</div>
			<div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg">
				<MessageIcon className="w-5 h-5" />
				View Comment
			</div>
			<div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg">
				<PiPencil className="w-5 h-5" />
				Edit title and description
			</div>
			<div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg">
				<BiLink className="w-5 h-5" />
				Get sharable link
			</div>
			<div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg">
				<MdDelete className="w-5 h-5" />
				Delete forever
			</div>
		</div>
	);
};

export default MobileProductItemMenu;
