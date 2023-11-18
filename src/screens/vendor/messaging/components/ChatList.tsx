import React, { useEffect, useState } from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { PiDotFill, PiDotOutlineFill } from 'react-icons/pi';

import Avatar from '../../../../components/Avatar';
import ChatDetailModal from '../components/ChatDetailModal';
import { useAppDispatch } from '../../../../store/hooks';
import { selectChat } from '../../../../store/slices/chatSlice';
import { SearchIcon } from '../../../../components/icons';

const ChatList = () => {
	const [selectedChat, setSelectedChat] = useState<{ user: string }>();
	const [showChatDetail, setShowChatDetail] = useState(false);
	const dispatch = useAppDispatch();
	const chats = [
		{ user: 'Kimboh Lovette' },
		{ user: 'Londe Tunde' },
		{ user: 'Nsong Stella' },
		{ user: 'Weke Bertila' },
		{ user: 'Kimboh Lovette' },
		{ user: 'Londe Tunde' },
		{ user: 'Weke Bertila' },
		{ user: 'Kimboh Lovette' },
		{ user: 'Londe Tunde' },
		{ user: 'Nsong Stella' },
		{ user: 'Weke Bertila' },
	];

	return (
		<div className="relative w-full h-full max-h-full grid grid-rows-[4rem_1fr] gap-2 lg:max-w-sm xl:max-w-lg py-4">
			<header>
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
			<div className="relative w-full h-full overflow-hidden">
				<div
					style={{ scrollbarWidth: 'none' }}
					className="absolute top-0 left-0 h-full w-full overflow-scroll scrollbar-none"
				>
					{chats.map((chat, key) => (
						<Chat
							key={key}
							onSelect={(chat) => {
								setSelectedChat(chat);
								dispatch(selectChat(chat));
								setShowChatDetail(true);
							}}
							chatData={chat}
						/>
					))}
				</div>
			</div>
			<div className="absolute bottom-0 left-0 w-full py-2 px-2">
				<div className="flex items-center py-2 px-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
					<div className="pr-2">
						<SearchIcon className="text-gray-600" />
					</div>
					<input
						type="search"
						className="focus:outline-none bg-transparent w-full text-sm text-gray-600 dark:text-gray-100"
						placeholder="Search conversions"
					/>
				</div>
			</div>
			<div className="lg:hidden">
				{showChatDetail && (
					<ChatDetailModal
						onCloseModal={() => {
							setShowChatDetail(false);
						}}
						chat={selectedChat as { user: string }}
					/>
				)}
			</div>
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
	const [containsUnread, setContainsUnread] = useState(false);
	const [isOnline, setIsOnline] = useState(false);

	// Randomly pick chat as read or unread chat
	// Randomly pick chat user as online or offline
	useEffect(() => {
		if (Math.random() > 0.5) {
			setContainsUnread(true);
		}
		if (Math.random() > 0.5) {
			setIsOnline(true);
		}
	}, []);

	return (
		<div
			onClick={() => {
				if (onSelect) {
					onSelect(chatData);
				}
			}}
			className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-app-neutral-500 flex items-center gap-2"
		>
			<div className="relative">
				<Avatar
					nameInitials={chatData.user.slice(0, 2).toUpperCase()}
					size={60}
				/>
				{isOnline && (
					<div className="rounded-full  shadow-xl shadow-white z-20">
						<PiDotOutlineFill
							className="absolute -top-3.5 -left-1 text-green-500"
							size={40}
						/>
					</div>
				)}
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
							className={
								containsUnread
									? 'inline text-blue-500'
									: 'inline text-gray-400 dark:text-gray-500'
							}
							size={40}
						/>
					</span>
				</div>
				<p className="text-gray-500 line-clamp-1 pt-0.5 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quia illo magnam nulla ducimus laborum enim placeat sit
					debitis exercitationem repellat fugiat, eius numquam
					adipisci nisi harum ut nostrum at cupiditate!
				</p>
			</div>
		</div>
	);
};
