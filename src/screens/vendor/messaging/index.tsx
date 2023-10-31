import React from 'react';
import ChatList from './components/ChatList';
import ChatDetail from './components/ChatDetail';

const MessagingCenter = () => {
	return (
		<div className="h-full">
			<h1 className="py-5 text-3xl font-bold text-gray-800 dark:text-gray-50">
				Messaging center
			</h1>
			<div className="flex-1 flex bg-white dark:bg-app-neutral-700 p-4 rounded-md">
				<div className="flex-1">
					<ChatList />
				</div>
				{/* <div className="flex-1 bg-blue-100">
					<ChatDetail />
				</div> */}
			</div>
		</div>
	);
};

export default MessagingCenter;
