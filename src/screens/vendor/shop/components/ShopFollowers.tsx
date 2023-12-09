import React from 'react';
import Avatar from '../../../../components/Avatar';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const ShopFollowers = () => {
	return (
		<div className="py-5 flex flex-col divide-y dark:divide-gray-800">
			{Array(4)
				.fill(0)
				.map((item, key) => (
					<div className="py-5">
						<Follower key={key} />
					</div>
				))}
		</div>
	);
};

export default ShopFollowers;

const Follower = () => {
	return (
		<div className="flex items-center justify-between gap-4 flex-wrap">
			<div className="flex items-start gap-2">
				<Avatar
					size={56}
					imageSrc="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					nameInitials={'KL'}
				/>
				<div className="flex flex-col gap-4">
					<div>
						<h2 className="font-bold text-gray-800 dark:text-gray-50">
							Reed Parker
						</h2>

						<p className="text-sm text-gray-500 dark:text-gray-400 py-1.5">
							<span className="font-semibold dark:text-gray-500">
								16
							</span>
							products
							<span className="px-2 text-gray-400 text-xs">
								|
							</span>
							<span className="font-semibold dark:text-gray-500">
								356
							</span>
							followers
						</p>
					</div>
					<div className="flex items-center gap-2">
						<button className="py-2 px-4 rounded-lg bg-slate-200 dark:bg-app-neutral-800 border dark:border-gray-700 hover:shadow font-semibold text-gray-800 dark:text-gray-50 text-xs">
							Follow
						</button>
						<button className="py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 font-semibold text-white text-xs">
							Message
						</button>
					</div>
				</div>
			</div>
			<div className="hidden sm:flex items-center gap-4 ">
				{Array(3)
					.fill(3)
					.map((item, idx) => (
						<div key={idx} className="relative group max-w-[200px]">
							<div className="hidden group-hover:grid absolute top-0 h-full left-0 w-full place-items-center bg-slate-900/60 rounded-xl">
								<div className="text-white text-3xl">
									<BsArrowRightCircleFill />
								</div>
							</div>
							<img
								className="w-full h-full object-center object-cover rounded-xl"
								src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							/>
						</div>
					))}
			</div>
		</div>
	);
};
