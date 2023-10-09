import React from 'react';
import { PiBasket } from 'react-icons/pi';
const RefundRequests = () => {
	return (
		<div className="w-full py-5 flex flex-col gap-y-8 bg-white dark:bg-app-neutral-700 rounded-xl p-5">
			<header className="flex items-center justify-between">
				<div>
					<div>
						<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-secondary-3 before:rounded-sm flex items-center gap-2">
							Refund requests
						</h1>
					</div>
				</div>
			</header>
			<div className="flex gap-x-2">
				<div className="bg-secondary-1 h-fit p-3 text-primary-3 text-2xl rounded-full">
					<PiBasket />
				</div>
				<div className="flex-1">
					<p className="text-gray-500 dark:text-gray-400">
						You have{' '}
						<span className="font-semibold text-gray-800 dark:text-gray-50">
							52 open refund requests
						</span>{' '}
						to action. This includes{' '}
						<span className="font-semibold text-gray-800 dark:text-gray-50">
							8 new requests
						</span>
						.👀
					</p>
				</div>
			</div>
			<div>
				<button className="place-self-center border hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-900 rounded-xl px-4 py-2 text-gray-600 font-semibold dark:text-gray-50 w-full">
					All products
				</button>
			</div>
		</div>
	);
};

export default RefundRequests;
