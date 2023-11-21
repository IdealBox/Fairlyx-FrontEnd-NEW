import React, { useState } from 'react';
import Avatar from '../../../components/Avatar';
import { CiTwitter } from 'react-icons/ci';
import { TiSocialPinterest } from 'react-icons/ti';
import { IoLogoInstagram } from 'react-icons/io5';
import Dropdown from '../../../components/forms/Dropdown';
import { FiFilter } from 'react-icons/fi';

const ShopModal = () => {
	const [selectedValue, setSelectedValue] = useState({
		id: '1',
		value: 'Most recent',
		type: '',
	});
	return (
		<div className="bg-white rounded-lg p-4 ">
			<header className="divide-y">
				<div>
					<div className="flex flex-col md:flex-row  md:items-center gap-y-5 mb-5">
						<div className="flex-1 flex items-start gap-4">
							<div>
								<Avatar
									size={72}
									imageSrc="https://media.istockphoto.com/id/1411162580/photo/edgy-young-black-woman-with-trendy-braided-hairstyle-against-an-orange-studio-background.webp?s=612x612&w=is&k=20&c=m78wES_kuLChgwGQNQqnArLWIp-OqMtcnq9C21Bl_GQ="
								/>
							</div>
							<div>
								<h2 className="py-2 text-xl font-semibold text-gray-800">
									Chelsie Haley
								</h2>
								<p className="text-gray-500 text-sm font-medium">
									Drem big. Think different. Do hard things!
								</p>
							</div>
						</div>
						<div className="flex items-start justify-between flex-wrap gap-2 text-2xl">
							<button className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 focus:outline-none">
								<CiTwitter />
							</button>
							<button className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 focus:outline-none">
								<IoLogoInstagram />
							</button>
							<button className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 focus:outline-none">
								<TiSocialPinterest />
							</button>
							<button className="py-2 px-4 rounded-lg text-sm font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none text-white">
								Follow
							</button>
						</div>
					</div>
				</div>
				<nav className="py-4 flex flex-col sm:flex-row sm:justify-between gap-y-4">
					<div className="flex items-center justify-between flex-wrap">
						<button className="py-2 px-4 rounded-lg text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700">
							Products
						</button>
						<button className="py-2 px-4 rounded-lg text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700">
							Followers
						</button>
						<button className="py-2 px-4 rounded-lg text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700">
							Following
						</button>
					</div>
					<div className="flex items-center gap-2 text-gray-600">
						<div className="flex-1">
							<Dropdown
								data={[
									{
										id: '1',
										value: 'Most recent',
										type: '',
									},
									{
										id: '2',
										value: 'Most ordered',
										type: '',
									},
									{
										id: '3',
										value: 'Most viewed',
										type: '',
									},
								]}
								selectedValue={selectedValue}
								setSelectedValue={setSelectedValue}
							/>
						</div>
						<button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-200 focus:outline-none">
							<FiFilter />
						</button>
					</div>
				</nav>
			</header>{' '}
		</div>
	);
};

export default ShopModal;
