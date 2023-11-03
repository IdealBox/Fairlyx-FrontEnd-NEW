import React from 'react';
import ChatList from './components/ChatList';
import ChatDetail from './components/ChatDetail';
import { useAppSelector } from '../../../store/hooks';

const MessagingCenter = () => {
	const selectedChat = useAppSelector((state) => state.chat.selectedChat);
	return (
		<div className="h-full">
			<h1 className="py-5 text-3xl font-bold text-gray-800 dark:text-gray-50">
				Messaging center
			</h1>
			<div className="flex-1 flex items-start gap-2 bg-white dark:bg-app-neutral-700 p-4 rounded-md">
				<div className="flex-1 lg:max-w-sm">
					<ChatList />
				</div>
				<div className="hidden lg:block flex-1">
					<ChatDetail
						chat={selectedChat as { user: string }}
						onCloseModal={() => {}}
					/>
				</div>
			</div>
		</div>
	);
};

export default MessagingCenter;
