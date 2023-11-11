import React, { useState } from 'react';
import { BiDotsHorizontal } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';
import Message from './Message';
import { BsFileEarmarkPlus } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';
import ChatDropdownMenu from './ChatDropdownMenu';
interface ChatProps {
	chat: {
		user: string;
	};
	onCloseModal: () => void;
}

const ChatDetailModal = ({ chat, onCloseModal }: ChatProps) => {
	const [showChatDropdownMenu, setShowChatDropdownMenu] = useState(false);

	const handleShowDropdownMenu = () => {
		setShowChatDropdownMenu((state) => !state);
	};
	return (
		<div className="absolute top-0 left-0 w-full h-full shadow-small overflow-hidden">
			<div className="h-full bg-white dark:bg-app-neutral-700 dark:border-gray-700 rounded-lg grid grid-rows-[5rem_1fr]">
				<header className="relative px-4 flex items-center justify-between shadow-sm py-5">
					<h1 className="font-medium text-xl text-gray-800 dark:text-gray-50">
						{chat.user}
					</h1>
					<div className="flex items-center justify-center gap-8 text-xl">
						<button
							onClick={handleShowDropdownMenu}
							className="bg-slate-50 dark:bg-gray-700/50 dark:text-gray-400 p-2 rounded-full"
						>
							<BiDotsHorizontal />
						</button>
						<button
							className="dark:bg-gray-700/50 dark:text-gray-400 p-2 rounded-full"
							onClick={() => {
								onCloseModal();
							}}
						>
							<RiCloseLine />
						</button>
						{showChatDropdownMenu && (
							<div className="absolute top-16 right-10 z-50">
								<ChatDropdownMenu />
							</div>
						)}
					</div>
				</header>
				<div className="py-5 px-8">
					<div className="flex justify-center">
						<button className="self-center rounded-md py-2 px-4 shadow border boder-gray-100 bg-white dark:bg-app-neutral-800 dark:border-gray-500 dark:text-gray-50 text-center text-gray-500">
							Load messages
						</button>
					</div>
					<div className="relative p-4 h-full">
						<div className="absolute top-0 left-0 w-full h-full overflow-y-scroll scrollbar-none">
							{Array(15)
								.fill(1)
								.map((item, key) => (
									<Message key={key} />
								))}
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 w-full px-4 py-2 flex items-center jusify between bg-white dark:bg-app-neutral-700">
					<div className="flex items-center gap-4 px-5 dark:text-gray-400">
						<BsFileEarmarkPlus />
						<GrEmoji />
					</div>
					<div className="flex-1 flex items-center bg-gray-100 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 rounded-lg border border-gray-200 p-0.5">
						<input
							type="text"
							className="flex-1 focus:outline-none py-2 px-4 bg-transparent rounded-lg w-full"
						/>
						<button className="px-4 py-2 rounded-lg bg-blue-500 dark:bg-blue-600 text-white font-medium">
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatDetailModal;
