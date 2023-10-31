import React, { useState } from 'react';
import { BiDotsHorizontal } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';
import Message from './Message';
interface ChatProps {
	chat: {
		user: string;
	};
	onCloseModal: () => void;
}
const ChatDetailModal = ({ chat, onCloseModal }: ChatProps) => {
	return (
		<div className="absolute top-0 left-0 w-full h-full p-4 bg-app-neutral-50">
			<div className="h-full bg-white rounded-lg">
				<header className="px-4 flex items-center justify-between shadow-sm py-5">
					<h1 className="font-medium text-xl text-gray-800">
						{chat.user}
					</h1>
					<div className="flex items-center justify-center gap-4 text-xl">
						<BiDotsHorizontal />
						<button
							onClick={() => {
								onCloseModal();
							}}
						>
							<RiCloseLine />
						</button>
					</div>
				</header>
				<div className="py-5">
					<div className="flex justify-center">
						<button className="self-center rounded-md py-2 px-4 shadow bg-white text-center text-gray-500">
							Load messages
						</button>
					</div>
					<div className="p-4">
						<Message />
						<Message />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatDetailModal;
