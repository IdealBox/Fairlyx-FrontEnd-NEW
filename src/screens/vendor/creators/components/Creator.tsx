import React from 'react';
import Avatar from '../../../../components/Avatar';
import Slider from 'react-slick';
import { BsArrowRightCircleFill } from 'react-icons/bs';
interface Props {
	index: number;
}
const Creator = ({ index }: Props) => {
	return (
		<div>
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-2">
					<Avatar
						size={64}
						imageSrc="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						nameInitials={'KL'}
					/>
					<div>
						<h2 className="font-bold text-gray-800 dark:text-gray-50">
							Reed Parker
							<span className="py-1 px-1.5 ml-2 bg-secondary-4/70 rounded-md">
								#{index}
							</span>
						</h2>

						<p className="text-sm text-gray-500 dark:text-gray-400 py-1.5">
							<span className="font-semibold dark:text-gray-500">
								16
							</span>{' '}
							products
							<span className="px-2 text-gray-400 text-xs">
								|
							</span>
							<span className="font-semibold dark:text-gray-500">
								3568
							</span>{' '}
							followers
						</p>
					</div>
				</div>
				<div className="hidden sm:flex items-center gap-2">
					<button className="py-2 px-4 rounded-lg bg-slate-200 dark:bg-app-neutral-800 border dark:border-gray-700 hover:shadow font-semibold text-gray-800 dark:text-gray-50 text-xs">
						Follow
					</button>
					<button className="hidden lg:block py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 font-semibold text-white text-xs">
						Shop now
					</button>
				</div>
			</div>
			<div>
				<div className="w-full overflow-auto scrollbar-thin my-5">
					<div className="flex items-center gap-4">
						{Array(5)
							.fill(3)
							.map((item, idx) => (
								<div
									key={idx}
									className="group relative h-48 aspect-[9/7]"
								>
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
			</div>
		</div>
	);
};

export default Creator;
