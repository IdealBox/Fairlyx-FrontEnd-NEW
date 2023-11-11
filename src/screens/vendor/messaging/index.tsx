import React from 'react';
import ChatList from './components/ChatList';
import ChatDetail from './components/ChatDetail';
import { useAppSelector } from '../../../store/hooks';

const MessagingCenter = () => {
	const selectedChat = useAppSelector((state) => state.chat.selectedChat);
	return (
		<div className="relative grid grid-cols-1 grid-rows-[5rem_auto] lg:grid-cols-[auto-fit_1fr] overflow-hidden px-4 py-2 h-full">
			<h1 className="py-5 text-3xl font-bold text-gray-800 dark:text-gray-50">
				Messaging center
			</h1>
			<div className="relative h-full flex first:max-w-xs bg-white dark:bg-app-neutral-700 rounded-md p-4">
				<ChatList />
				<ChatDetail
					chat={selectedChat as { user: string }}
					onCloseModal={() => {}}
				/>
			</div>
		</div>
	);
};

export default MessagingCenter;
