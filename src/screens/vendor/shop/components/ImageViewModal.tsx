import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { IoLink } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';

const ImageViewModal = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full z-[1000] bg-slate-50">
			<header className="py-8 px-4 flex items-start justify-between gap-5">
				<div className="flex sm:items-center flex-col-reverse sm:flex-row items-start flex-1 gap-y-4">
					<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
						<button className="flex items-center gap-2 text-sm p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-app-neutral-600 focus:outline-none">
							<FaHeart className="text-red-400" />
							<span>45</span>
						</button>
						<div className="">
							<button className="flex items-center gap-4 py-2 px-4 rounded-lg text-xs sm:text-sm bg-blue-500 hover:bg-blue-600 text-white font-semibold">
								<span>Download now</span>
								<BsDownload />
							</button>
						</div>
					</div>
					<h1 className="text-gray-800 font-medium sm:font-semibold sm:text-lg flex-1 sm:text-center">
						Fleet - Travel shopping UI design kit
					</h1>
				</div>
				<div className="flex items-center gap-2">
					<button className="w-fit p-2 bg-white font-semibold text-gray-800 rounded-full border  text-xl">
						<IoLink />
					</button>
					<button className="w-fit p-2 bg-white font-semibold text-gray-800 rounded-full border  text-xl">
						<MdClose />
					</button>
				</div>
			</header>
		</div>
	);
};

export default ImageViewModal;
