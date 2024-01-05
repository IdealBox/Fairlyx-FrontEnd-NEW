import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useAppDispatch } from '../../../../store/hooks';
import { selectCustomer } from '../../../../store/slices/customerSlice';
import Avatar from '../../../../components/Avatar';
import { BsPlus } from 'react-icons/bs';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { IoLinkOutline } from 'react-icons/io5';
import { CiTwitter } from 'react-icons/ci';
import { PiPinterestLogo, PiWarningCircleFill } from 'react-icons/pi';
import { RiFacebookLine } from 'react-icons/ri';
import { SlSocialInstagram } from 'react-icons/sl';
import Editor from '../../../../components/Editor';

const CustomerDetail = () => {
	const dispatch = useAppDispatch();
	return (
		<div className="w-full py-8">
			<header className="py-4 flex justify-end items-center">
				<button
					onClick={() => {
						dispatch(selectCustomer(null));
					}}
					className="focus:outline-none text-gray-600 bg-gray-100 shadow-lg p-2 rounded-full"
				>
					<IoMdClose />
				</button>
			</header>
			<div className="@container">
				<div className="flex flex-col @lg:flex-row items-start justify-between gap-4">
					<div className="flex items-center gap-4">
						<div>
							<Avatar
								imageSrc="https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								size={72}
							/>
						</div>
						<div>
							<h2 className="text-xl font-semibold text-gray-800">
								Chelsie Haley
							</h2>
							<h5 className="text-gray-400">@chelsie</h5>
						</div>
					</div>
					<div className="flex items-center gap-2 *:flex-1  ">
						<button className="bg-blue-500 py-2 rounded-lg px-4 text-white font-semibold">
							Follow <BsPlus size={24} className="inline" />
						</button>
						<button className="flex items-center gap-1  bg-blue-500 py-2 rounded-lg px-4 text-white font-semibold">
							Message
							<BiSolidMessageSquareDetail
								size={20}
								className="inline"
							/>
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-8 pt-8">
					<div className="flex flex-col gap-3 w-full">
						<h1>Private notes</h1>
						<Editor />
					</div>
					<div>
						<ul className="flex flex-col divide-y *:py-4 font-semibold">
							<li className="flex items-center gap-4 text-gray-700">
								<MdOutlineMail
									className="text-gray-500"
									size={20}
								/>
								kimbohlovette@gmail.com
							</li>
							<li className="text-gray-500">
								<ul className="flex items-center gap-8">
									<li>
										<CiTwitter size={28} />
									</li>
									<li>
										<SlSocialInstagram size={24} />
									</li>
									<li>
										<PiPinterestLogo size={28} />
									</li>
									<li>
										<RiFacebookLine size={28} />
									</li>
								</ul>
							</li>
							<li className="flex items-center gap-4 text-gray-700">
								<IoLinkOutline
									className="text-gray-500"
									size={20}
								/>
								robot.co
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-gray-800 flex items-center gap-4 font-semibold">
							Purchase history <PiWarningCircleFill />
						</h2>
						<div className="py-8 divide-y">
							<header className="pb-5 flex items-center justify-between text-gray-600 text-sm">
								<div>Product</div>
								<div>Price</div>
							</header>
							<div className="pt-4 flex flex-col gap-y-4">
								{Array(4)
									.fill(0)
									.map((row, key) => (
										<ProductRecord key={key} />
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerDetail;

const ProductRecord = () => {
	return (
		<div className="flex items-center justify-between hover:bg-gray-300 rounded-lg p-2 cursor-pointer">
			<div className="flex gap-4">
				<div className="max-h-fit">
					<img
						className="max-w-36 sm:max-w-14 rounded-lg object-center object-cover aspect-square"
						src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
				</div>
				<div>
					<h1 className="font-semibold text-gray-800">
						Product title
					</h1>
					<a className="text-sm text-gray-400 font-medium">
						ui8.net/product/product_link
					</a>
				</div>
			</div>
			<span className="px-4 py-2 text-gray-800 font-semibold">
				$30.54
			</span>
		</div>
	);
};
