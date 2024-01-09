import React, { useEffect } from 'react';
import Avatar from '../../../../components/Avatar';
import moment from 'moment';

const Messages = () => {
	return (
		<div className="p-4 bg-white dark:bg-app-neutral-700 rounded-lg">
			<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Messages
					</h1>
				</div>
			</header>
			<div className="py-4 flex flex-col divide-y divide-gray-200 dark:divide-gray-800 [&>*]:py-4">
				{Array(5)
					.fill(1)
					.map((item, key) => (
						<div>
							<Message
								key={key}
								text="Something happened but I'm not quite sure..."
								user={{
									name: 'Danny',
									userName: '@dannyy',
									image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
								}}
								sentAt={new Date('Dec 24, 2023')}
							/>
						</div>
					))}
			</div>
			<div>
				<button className="py-2 w-full border border-gray-200 dark:border-gray-700 focus:outline-none text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-app-neutral-800 font-semibold">
					View all messages
				</button>
			</div>
		</div>
	);
};

export default Messages;

interface MessageProps {
	text: string;
	user: {
		name: string;
		userName: string;
		image: string;
	};
	sentAt: Date;
}
const Message = ({ text, user, sentAt }: MessageProps) => {
	return (
		<div className="flex items-center gap-2 py-2">
			<div>
				<Avatar imageSrc={user.image} size={40} />
			</div>
			<div className="flex-1">
				<div className="flex items-center justify-between px-1">
					<div className="flex items-center gap-2">
						<h1 className="text-gray-800 dark:text-gray-100 font-semibold text-sm">
							{user.name}
						</h1>
						<span className="text-gray-500 dark:text-gray-400 font-medium text-sm">
							{user.userName}
						</span>
					</div>
					<span className="text-gray-400 font-medium text-xs">
						{dateFormatter(sentAt)}
					</span>
				</div>
				<div>
					<p className="text-gray-800 dark:text-gray-300 line-clamp-1 text-sm">
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};

const dateFormatter = (date: Date): string => {
	const years = moment().diff(date, 'years');
	if (years > 0) {
		return years + 'y';
	}
	const months = moment().diff(date, 'months');
	if (months > 0) {
		return months + 'M';
	}
	const weeks = moment().diff(date, 'weeks');
	if (weeks > 0) {
		return weeks + 'w';
	}
	const days = moment().diff(date, 'days');
	if (days > 0) {
		return days + 'd';
	}
	const hours = moment().diff(date, 'hours');
	if (hours > 0) {
		return hours + 'h';
	}
	const mins = moment().diff(date, 'minutes');
	if (mins > 0) {
		return hours + 'm';
	}

	return Math.floor(moment().diff(date, 'seconds')) + 's';
};
