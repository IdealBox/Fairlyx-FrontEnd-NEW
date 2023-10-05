import React from 'react';
import Avatar from './Avatar';
import { HiArrowLongRight } from 'react-icons/hi2';

const Overview = () => {
	return (
		<div className="p-4 rounded-xl bg-white">
			<header className="flex items-center justify-between my-4">
				<div>
					<h1 className="text-gray-800 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Overview
					</h1>
				</div>
				<select className="shadow-sm border border-gray-200 rounded-lg py-1.5 px-4 text-sm text-gray-600 font-medium">
					<option value="0">All time</option>
					<option value="1">Second</option>
					<option value="2">Third</option>
					<option value="3">Fourth</option>
				</select>
			</header>
			<div className="flex gap-4 bg-gray-100 rounded-xl p-2">
				<div className="flex-1 shadow-md bg-white rounded-xl p-5">
					<div className="flex-1 flex lg:flex-row lg:justify-between gap-3 items-start">
						<div className="hidden sm:block">icon</div>
						<div className="flex flex-col gap-2 sm:flex-1 sm:flex-row sm:justify-between">
							<div className="py-2">
								<h3 className="text-gray-500">Customers</h3>
								<h1 className="text-5xl text-gray-800 font-bold">
									1024
								</h1>
							</div>
							<div className="bg-red-100/90 text-red-400 font-semibold rounded-lg p-1 text-sm w-fit h-fit flex items-center justify-center gap-1">
								<span>icon</span>
								<span>37.8%</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-1 p-5">
					<div className="flex-1 flex lg:flex-row lg:justify-between gap-3 items-start">
						<div className="hidden sm:block">icon</div>
						<div className="flex flex-col gap-2 sm:flex-1 sm:flex-row sm:justify-between">
							<div className="py-2">
								<h3 className="text-gray-500">Income</h3>
								<h1 className="text-5xl text-gray-800 font-bold">
									256K
								</h1>
							</div>
							<div className="bg-white/90 text-green-500 font-semibold rounded-md p-1 text-sm w-fit h-fit flex items-center justify-center gap-1">
								<span>icon</span>
								<span>37.8%</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-between py-5 my-4">
				<div className="max-w-[15rem]">
					<p className="text-gray-600">
						Welcome{' '}
						<span className="font-semibold">875 customers</span>{' '}
						with a personal message 😎
					</p>
				</div>
				<button className="border py-2 px-4 rounded-lg text-gray-700 font-semibold">
					<span>Send</span>
					<span className="hidden sm:inline"> message</span>
				</button>
			</div>

			<div className="flex gap-2 justify-evenly items-center">
				{[1, 2, 3].map(() => (
					<div>
						<Avatar
							image="https://abegmusic.com/wp-content/uploads/2019/12/Tatiana-Manaois-No-Strings-Mp3-download-588x381.jpg"
							title="Tatiana Manoaous"
							size={50}
						/>
						<h2 className="py-3 text-gray-600 text-sm">Tatiana</h2>
					</div>
				))}
				<div className="text-center">
					<button
						style={{ height: 50, width: 50 }}
						className="rounded-full border bg-gray-200 flex items-center justify-center text-xl"
					>
						<HiArrowLongRight />
					</button>
					<div className="py-3 text-gray-800 text-sm font-medium">
						View all
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
