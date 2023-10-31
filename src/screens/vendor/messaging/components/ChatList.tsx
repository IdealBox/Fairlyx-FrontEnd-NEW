import React, { useEffect, useState } from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { PiDotOutlineFill } from 'react-icons/pi';

import Avatar from '../../../../components/Avatar';
import ChatDetailModal from '../../components/ChatDetailModal';

const ChatList = () => {
	const [selectedChat, setSelectedChat] = useState<{ user: string }>();
	const [showChatDetail, setShowChatDetail] = useState(false);

	return (
		<div className="w-full flex flex-col min-h-screen">
			<header className="mb-2">
				<button className="w-full focus:outline-none rounded-full bg-gray-100 dark:bg-app-neutral-800 flex gap-2 py-2 px-4 text-gray-600 font-semibold">
					<span className="flex-1 flex items-center justify-center gap-2 rounded-full shadow py-2 px-4 bg-white dark:bg-app-neutral-500 text-gray-800 dark:text-gray-100">
						<BsPersonCircle />
						<span>Customers</span>
					</span>
					<span className="flex-1 flex items-center justify-center gap-2 rounded-full py-2 px-4">
						<AiOutlineThunderbolt />
						<span>Everyone</span>
					</span>
				</button>
			</header>
			<div className="w-full overflow-scroll flex-1">
				<Chat
					onSelect={(chat) => {
						setSelectedChat(chat);
						setShowChatDetail(true);
					}}
					chatData={{ user: 'Kimboh Lovette' }}
				/>
				<Chat chatData={{ user: 'Londe Tunde' }} />
				<Chat chatData={{ user: 'Nsong Stella' }} />
				<Chat chatData={{ user: 'Weke Bertila' }} />
			</div>
			{showChatDetail && (
				<ChatDetailModal
					onCloseModal={() => {
						setShowChatDetail(false);
					}}
					chat={selectedChat as { user: string }}
				/>
			)}
		</div>
	);
};

export default ChatList;

interface ChatProps {
	chatData: {
		user: string;
	};
	onSelect?: (chat: { user: string }) => void;
}

const Chat = ({ chatData, onSelect }: ChatProps) => {
	return (
		<div
			onClick={() => {
				if (onSelect) {
					onSelect(chatData);
				}
			}}
			className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-app-neutral-500 flex items-center gap-2"
		>
			<div>
				<Avatar
					image={chatData.user.slice(0, 2).toUpperCase()}
					size={60}
				/>
			</div>
			<div className="flex-1">
				<div className="flex items-center justify-between">
					<h2 className="font-semibold text-gray-800 dark:text-gray-100">
						{chatData.user}
					</h2>
					<span>
						<span className="text-sm text-gray-500 dark:text-gray-400">
							11:59AM
						</span>
						<PiDotOutlineFill
							className="inline text-gray-400 dark:text-gray-500"
							size={40}
						/>
					</span>
				</div>
				<p className="text-gray-500 line-clamp-1 pt-0.5">
					Lorem ipsum dolor, sit amet consectetur
				</p>
			</div>
		</div>
	);
};
