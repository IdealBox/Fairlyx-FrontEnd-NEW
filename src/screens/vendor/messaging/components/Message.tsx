import React from 'react';
import Avatar from '../../../../components/Avatar';

const Message = () => {
	return (
		<div className="flex items-start gap-4 py-3">
			<Avatar image="WB" size={30} />
			<div className="">
				<header className="flex gap-4 text-sm">
					<h1 className="font-semibold text-gray-500 dark:text-gray-500">
						Weke Betila
					</h1>
					<span className="text-gray-500 dark:text-gray-400">
						9:47AM
					</span>
				</header>
				<p className="text-gray-800 py-2 text-sm dark:text-gray-100">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Porro veritatis officiis nihil repellat dolor nisi dicta
					quisquam. Fugiat numquam accusantium eaque dolorem esse
				</p>
			</div>
		</div>
	);
};

export default Message;
