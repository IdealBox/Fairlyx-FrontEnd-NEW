import React, { useState } from 'react';

import Dropdown from '../../../../components/forms/Dropdown';
import { BsBag, BsGraphDown, BsInfo } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import { CiWavePulse1 } from 'react-icons/ci';

const Overview = () => {
	const [selectedValue, setSelectedValue] = useState({
		value: 'All time',
		id: '1',
		type: '',
	});
	return (
			<div className="grid bg-white dark:bg-app-neutral-700 dark:text-white/80 p-9 rounded-xl grid-cols-1 gap-3 sm:grid-cols-3">
				<div className="flex flex-col rounded-xl">
					<div className="flex justify-between">
						<div>
							<div className="w-10 h-10 rounded-full bg-secondary-4 flex items-center justify-center">
								<BsGraphDown className="text-white dark:text-white/80" />
							</div>
							<div className="flex gap-2 items-center text-[14px]">
								Earning
								<BsInfo className="bg-black p-1 w-5 h-5 text-white dark:text-white/80 rounded-full" />
							</div>
							<div className="text-[40px] leading-[60px] font-bold">
								$128K
							</div>
						</div>
					</div>{' '}
					<div className="p-1 bg-gray-200 dark:bg-[#ffffff10] flex gap-2 w-[160px] rounded">
						<div className="text-primary-2 flex gap-1 items-center">
							<AiOutlineArrowUp className="w-5 h-5" /> 55.8%
						</div>
						this week
					</div>
				</div>
				<div className="flex flex-col rounded-xl">
					<div className="flex justify-between">
						<div>
							<div className="w-10 h-10 rounded-full bg-secondary-2 flex items-center justify-center">
								<BsBag className="text-white dark:text-white/80" />
							</div>
							<div className="flex gap-2 items-center text-[14px]">
								Customer
								<BsInfo className="bg-black p-1 w-5 h-5 text-white dark:text-white/80 rounded-full" />
							</div>
							<div className="text-[40px] leading-[60px] font-bold">
								$512k
							</div>
						</div>
					</div>
					<div className="p-1 bg-gray-200 dark:bg-[#ffffff10] flex gap-2 w-[160px] rounded">
						<div className="text-primary-3 flex gap-1 items-center">
							<AiOutlineArrowUp className="w-5 h-5" /> 55.8%
						</div>
						this week
					</div>
				</div>
				<div className="flex flex-col rounded-xl">
					<div className="flex justify-between">
						<div>
							<div className="w-10 h-10 rounded-full bg-secondary-3 flex items-center justify-center">
								<MdPayment className="text-white dark:text-white/80" />
							</div>
							<div className="flex gap-2 items-center text-[14px]">
								Payout
								<BsInfo className="bg-black p-1 w-5 h-5 text-white dark:text-white/80 rounded-full" />
							</div>
							<div className="text-[40px] leading-[60px] font-bold">
								$64K
							</div>
						</div>
					</div>
					<div className="p-1 bg-gray-200 dark:bg-[#ffffff10] flex gap-2 w-[160px] rounded">
						<div className="text-primary-2 flex gap-1 items-center">
							<AiOutlineArrowUp className="w-5 h-5" /> 55.8%
						</div>
						this week
					</div>
				</div>
			</div>
	);
};

export default Overview;
