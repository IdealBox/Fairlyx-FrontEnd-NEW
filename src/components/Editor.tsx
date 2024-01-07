import React from 'react';

const Editor = () => {
	return (
		<div className="w-full h-fit min-h-8">
			<textarea className="h-full w-full focus:outline-none border-2 rounded-lg p-2 text-sm shadow-sm bg-transparent dark:bg-app-neutral-700 dark:caret-gray-400 dark:border-gray-800 dark:text-gray-200"></textarea>
		</div>
	);
};

export default Editor;
