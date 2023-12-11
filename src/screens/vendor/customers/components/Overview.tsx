import React, { useState } from 'react';
import Dropdown from '../../../../components/forms/Dropdown';
import AppLineChart from '../../../../components/AppLineChart';
import { AiOutlineArrowUp } from 'react-icons/ai';
import GetMoreCustomers from '../../components/GetMoreCustomers';
import Avatar from '../../../../components/Avatar';
import { HiArrowLongRight } from 'react-icons/hi2';
import TrafficChannel from './TrafficChannel';
import ActiveCustomers from './ActiveCustomers';
import ShareProducts from './ShareProducts';

const CustomerOverview = () => {
	const [selectedValue, setSelectedValue] = useState<{
		id: string;
		value: string;
		type: string;
	}>({
		id: '1',
		value: 'Last 28 days',
		type: '',
	});

	return (
		<div className="my-5 p-4 flex flex-col gap-2">
			<div className="p-4 bg-white rounded-lg">
				<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
					<div>
						<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
							Total customers
						</h1>
					</div>
					<div>
						<Dropdown
							data={[
								{ value: 'Last 28 days', type: '', id: '1' },
								{ value: 'Last month', type: '', id: '2' },
								{ value: 'September', type: '', id: '3' },
							]}
							selectedValue={selectedValue}
							setSelectedValue={setSelectedValue}
						/>
					</div>
				</header>
				<div>
					<div>
						<div className="py-8 flex items-center flex-col sm:items-start gap-2">
							<h1 className="text-gray-800 font-semibold text-2xl">
								{'1,494'} customers
							</h1>
							<div className="flex gap-2 text-xs font-medium">
								<span className="flex gap-0.5 items-center text-primary-2 bg-primary-2/60 max-w-fit rounded-md  p-0.5  px-1">
									<AiOutlineArrowUp />
									<span className="">56%</span>
								</span>
								<span className="text-gray-600">
									vs, Sep 8, 2021
								</span>
							</div>
						</div>
						<div style={{ height: 300 }} className="py-4">
							<AppLineChart />
						</div>
						<div>
							<div>
								<div className="flex items-center justify-between py-5">
									<div className="max-w-[15rem]">
										<p className="text-gray-600 dark:text-gray-500">
											Welcome{' '}
											<span className="font-semibold dark:text-app-neutral-50">
												875 customers
											</span>{' '}
											with a personal message 😎
										</p>
									</div>
									<button className="border dark:border-gray-600 py-1.5 px-4 rounded-xl text-gray-700 dark:text-gray-100 font-semibold">
										<span>Send</span>
										<span className="hidden sm:inline">
											{' '}
											message
										</span>
									</button>
								</div>
								<div className="flex gap-2 justify-evenly items-center mt-4">
									{Array(3)
										.fill(1)
										.map(() => (
											<div>
												<Avatar
													imageSrc="https://abegmusic.com/wp-content/uploads/2019/12/Tatiana-Manaois-No-Strings-Mp3-download-588x381.jpg"
													title="Tatiana Manoaous"
													size={50}
												/>
												<h2 className="py-3 text-gray-600 dark:text-gray-300 text-sm">
													Tatiana
												</h2>
											</div>
										))}
									<div className="text-center">
										<button
											style={{ height: 50, width: 50 }}
											className="rounded-full bg-app-neutral-100 dark:bg-shade-300 flex items-center justify-center text-xl dark:text-gray-400"
										>
											<HiArrowLongRight />
										</button>
										<div className="py-3 text-gray-800 dark:text-gray-300 text-sm font-medium">
											View all
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<TrafficChannel />
			<ActiveCustomers />
			<ShareProducts />
		</div>
	);
};

export default CustomerOverview;
