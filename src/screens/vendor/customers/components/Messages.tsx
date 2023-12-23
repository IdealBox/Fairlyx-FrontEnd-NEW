import React from 'react';

const Messages = () => {
	return (
		<div className="p-4 bg-white rounded-lg">
			<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Messages
					</h1>
				</div>
			</header>
		</div>
	);
};

export default Messages;
