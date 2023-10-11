import React from 'react';
import { RiFacebookLine } from 'react-icons/ri';
import { CiTwitter } from 'react-icons/ci';
import { BiLogoInstagram } from 'react-icons/bi';
const GetMoreCustomers = () => {
	return (
		<div className="w-full py-5 flex flex-col gap-y-5 bg-white dark:bg-app-neutral-700 rounded-xl p-5">
			<header className="flex items-center justify-between">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-secondary-3 before:rounded-sm flex items-center gap-2">
						Get more customers!
					</h1>
				</div>
			</header>

			<div>
				<p className="text-gray-500 dark:text-gray-400 py-2">
					50% of customers explore products because the the author
					share them on social media network. Get your earnings right
					now!🔥
				</p>
			</div>
			<div className="btn-group flex items-center justify-evenly [&>*]:flex-1 gap-x-4 text-2xl">
				<button className="py-2 px-4 rounded-lg border text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-900 shadow">
					<RiFacebookLine className="mx-auto" />
				</button>
				<button className="py-2 px-4 rounded-lg border text-gray-600 hover:bg-gray-100 shadow dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-900">
					<CiTwitter className="mx-auto" />
				</button>
				<button className="py-2 px-4 rounded-lg border text-gray-600 hover:bg-gray-100 shadow dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-900">
					<BiLogoInstagram className="mx-auto" />
				</button>
			</div>
		</div>
	);
};

export default GetMoreCustomers;
