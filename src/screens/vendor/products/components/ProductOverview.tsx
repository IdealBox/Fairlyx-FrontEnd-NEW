import React, { useState } from 'react';

import Dropdown from '../../../../components/forms/Dropdown';
import { BsBag, BsGraphDown, BsInfo } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import { CiWavePulse1 } from 'react-icons/ci';

const ProductOverview = () => {
	const [selectedValue, setSelectedValue] = useState({
		value: 'All time',
		id: '1',
		type: '',
	});
	return (
		<div className="bg-white dark:bg-app-neutral-700 p-3 rounded-xl flex flex-col gap-5">
			<header className="flex items-center justify-between">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Overview
					</h1>
				</div>
				<div>
					<Dropdown
						data={[
							{ value: 'All time', type: '', id: '1' },
							{ value: 'Last month', type: '', id: '2' },
							{ value: 'September', type: '', id: '3' },
						]}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
					/>
				</div>
			</header>

			<div className="flex gap-3 w-full sm:flex-col lg:flex-row">
				<div className="w-full flex flex-col p-9 rounded-xl bg-[#32cf7b34]">
					<div className="flex justify-between">
						<div>
							<div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
								<BsGraphDown className="text-white" />
							</div>
							<div className="flex gap-2 items-center text-[14px]">
								Earning
								<BsInfo className="bg-black p-1 w-5 h-5 text-white rounded-full" />
							</div>
							<div className="text-[50px] leading-[60px] font-bold">
								128K
							</div>
						</div>
						<div>
							<CiWavePulse1 className="w-24 text-primary-2 h-24" />
						</div>
					</div>{' '}
					<div className="p-1 bg-gray-200 dark:bg-[#ffffff10] flex gap-2 w-[160px] rounded">
						<div className="text-primary-2 flex gap-1 items-center">
							<AiOutlineArrowUp className="w-5 h-5" /> 55.8%
						</div>
						this week
					</div>
				</div>
				<div className="w-full flex flex-col p-9 h-[250px] rounded-xl bg-[#31cef932]">
					<div className="flex justify-between">
						<div>
							<div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
								<BsBag className="text-white" />
							</div>
							<div className="flex gap-2 items-center text-[14px]">
								Customer
								<BsInfo className="bg-black p-1 w-5 h-5 text-white rounded-full" />
							</div>
							<div className="text-[50px] leading-[60px] font-bold">
								512
							</div>
						</div>
						<div>
							<CiWavePulse1 className="w-24 text-primary-3 h-24" />
						</div>
					</div>
					<div className="p-1 bg-gray-200 dark:bg-[#ffffff10] flex gap-2 w-[160px] rounded">
						<div className="text-primary-3 flex gap-1 items-center">
							<AiOutlineArrowUp className="w-5 h-5" /> 55.8%
						</div>
						this week
					</div>
				</div>
				<div className="w-full h-[250px] flex flex-col p-9 rounded-xl bg-[#8f2cff2f]">
					<div className="flex justify-between">
						<div>
							<div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
								<MdPayment className="text-white" />
							</div>
							<div className="flex gap-2 items-center text-[14px]">
								Payout
								<BsInfo className="bg-black p-1 w-5 h-5 text-white rounded-full" />
							</div>
							<div className="text-[50px] leading-[60px] font-bold">
								64K
							</div>
						</div>
						<div>
							<CiWavePulse1 className="w-24 h-24" />
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
		</div>
	);
};

export default ProductOverview;
