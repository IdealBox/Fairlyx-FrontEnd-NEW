import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { IoLink } from 'react-icons/io5';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

const ImageViewModal = () => {
	return (
		<div className="fixed top-0 left-0 h-screen overflow-y-scroll scrollbar-thin z-[1000] bg-slate-50 ">
			<div className="flex flex-col">
				<header className="py-8 px-4 flex items-start justify-between gap-5">
					<div className="flex sm:items-center flex-col-reverse sm:flex-row items-start flex-1 gap-y-4">
						<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
							<button className="flex items-center gap-2 text-sm p-2 rounded-lg border border-gray-200 hover:bg-gray-200 dark:hover:bg-app-neutral-600 focus:outline-none">
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
						<h1 className="text-gray-800 font-semibold sm:text-lg flex-1 sm:text-center">
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
				<div className="relative flex items-start justify-center w-full px-4  flex-1">
					<button className="left-5 top-1/2 absolute rounded-full p-2 text-gray-600 focus:outline-none hover:bg-gray-200">
						<IoMdArrowBack />
					</button>
					<button className="right-5 top-1/2 absolute rounded-full p-2 text-gray-600 focus:outline-none hover:bg-gray-200">
						<IoMdArrowForward />
					</button>
					<div className="sm:max-w-[85%]  overflow-hidden max-h-full">
						<img
							src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Fleet - Travel shopping UI design kit"
							className="w-full object-center object-cover rounded-xl max-h-full aspect-[6/9] sm:aspect-square md:aspect-auto"
						/>
					</div>
				</div>
				<footer className="text-center text-xs text-gray-600 my-8 font-medium">
					Elegant product mockup your next project
				</footer>
			</div>
		</div>
	);
};

export default ImageViewModal;
