import React, { useState } from 'react';
import { BiDotsHorizontal } from 'react-icons/bi';
import Message from '../components/Message';
import { GrEmoji } from 'react-icons/gr';
import { BsFileEarmarkPlus } from 'react-icons/bs';
import ChatDropdownMenu from './ChatDropdownMenu';
interface ChatProps {
	chat: {
		user: string;
	};
	onCloseModal: () => void;
}
const ChatDetail = ({ chat, onCloseModal }: ChatProps) => {
	const [showChatDropdownMenu, setShowChatDropdownMenu] = useState(false);
	const handleShowChatDropdownMenu = () => {
		setShowChatDropdownMenu((state) => !state);
	};
	return (
		<div className="hidden lg:grid relative w-full h-full grid-rows-[5rem_1fr] bg-white rounded-xl border border-gray-200 ml-2 overflow-hidden">
			<header className="px-4 flex items-center justify-between shadow-sm py-5 bg-app-neutral-50">
				<div>
					<h1 className="font-medium text-xl text-gray-800">
						{chat.user}
					</h1>
					<p className="text-xs text-slate-500 py-2">
						Customer since:{' '}
						<span className="font-semibold">Sep 12 2022</span> |
						Purchased{' '}
						<span className="font-semibold">45 items</span> |
						Lifetime: <span className="font-semibold">$12,575</span>
					</p>
				</div>
				<div className="flex items-center justify-center gap-4 text-xl">
					<button
						onClick={handleShowChatDropdownMenu}
						className="bg-slate-50 text-sm p-2 rounded-full"
					>
						<BiDotsHorizontal />
					</button>
				</div>

				{showChatDropdownMenu && (
					<div className="absolute top-16 right-4 z-50">
						<ChatDropdownMenu />
					</div>
				)}
			</header>
			<div className="py-5 px-8">
				<div className="flex justify-center">
					<button className="self-center rounded-md py-2 px-4 shadow bg-white text-center text-gray-500">
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
			<div className="absolute bottom-0 left-0 w-full px-4 py-2 flex items-center jusify between bg-white">
				<div className="flex items-center gap-4 px-5">
					<BsFileEarmarkPlus />
					<GrEmoji />
				</div>
				<div className="flex-1 flex items-center bg-gray-100 rounded-lg border border-gray-200 p-0.5">
					<input
						type="text"
						className="flex-1 focus:outline-none py-2 px-4 bg-transparent rounded-lg w-full"
					/>
					<button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium">
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatDetail;
