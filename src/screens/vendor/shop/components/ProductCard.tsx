import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaPen, FaStar } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ProductCard = () => {
	return (
		<div className="group p-4 rounded-lg flex flex-col gap-4">
			<div className="relative overflow-hidden rounded-lg h-fit">
				<div className="absolute top-0 left-0 h-full w-full bg-gray-900/20 group-hover:bg-gray-900/60 grid place-items-center">
					<div className="hidden group-hover:flex items-center gap-3 w-fit">
						<span className="p-2 rounded-full bg-gray-200 text-gray-600">
							<FaPen />
						</span>
						<span className="p-2 rounded-full bg-gray-200 text-gray-600">
							<RiDeleteBin6Line />
						</span>
						<span className="p-2 rounded-full bg-gray-200 text-gray-600">
							<BsArrowRight />
						</span>
					</div>
				</div>
				<img
					src="https://images.unsplash.com/photo-1541506618330-7c369fc759b5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					className="aspect-video object-center object-cover rounded-lg"
				/>
			</div>
			<div className="flex items-start justify-between">
				<div>
					<h2 className="font-semibold text-gray-800 dark:text-gray-200 sm:max-w-[80%]">
						Fleet - Travel shopping UI design kit
					</h2>
				</div>
				<div>
					<span className="p-2 bg-secondary-3 dark:bg-secondary-3/80 font-medium text-sm rounded-md text-gray-800">
						$64
					</span>
				</div>
			</div>
			<div>
				<span className="flex items-center gap-2 text-sm">
					<FaStar className="text-amber-500 dark:text-gray-500" />
					<span className="text-gray-700 dark:text-gray-500 font-semibold">
						4.8 <span className="text-gray-500">(87)</span>
					</span>
				</span>
			</div>
		</div>
	);
};

export default ProductCard;
