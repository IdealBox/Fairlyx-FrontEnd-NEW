import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';

const ChatDropdownMenu = () => {
	return (
		<div className="py-2 bg-white rounded-xl shadow-2xl border border-gray-100 min-w-fit">
			<ul className="text-gray-500 [&>*]:py-2 [&>*]:px-8 [&>*]:flex [&>*]:gap-3 [&>*]:items-center text-sm">
				<li>
					<BsCheckLg size={20} /> Mark as read
				</li>
				<li>
					<RiDeleteBin5Line size={20} /> Delete message
				</li>
			</ul>
		</div>
	);
};

export default ChatDropdownMenu;
