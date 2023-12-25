import React from 'react';
import { LuBadgePercent } from 'react-icons/lu';
import ShareProductCard from './Product';
import { CiTwitter } from 'react-icons/ci';
import { BiLogoInstagram } from 'react-icons/bi';
import { RiFacebookLine } from 'react-icons/ri';

const ShareProducts = () => {
	const products: {
		image: string;
		title: string;
		price: string;
		scheduledTime: Date;
	}[] = [
		{
			image: 'https://plus.unsplash.com/premium_photo-1661388007672-2274a64bf468?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			title: 'Fleet - Travel shopping UI',
			price: '76',
			scheduledTime: new Date(),
		},
		{
			image: 'https://media.istockphoto.com/id/1415405814/de/foto/absolventenh%C3%A4nde-die-abschlusskappen-in-die-luft-werfen.jpg?s=612x612&w=is&k=20&c=Gk4fx4-4kirvEXrJAuWtp_KwyQgCdRnWEROj1Q2kbOQ=',
			title: 'Fleet - Travel shopping UI',
			price: '761',
			scheduledTime: new Date(),
		},
	];
	return (
		<div className="p-4 rounded-lg bg-white dark:bg-app-neutral-700">
			<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
						Share your products
					</h1>
				</div>
				<div>
					<button className="text-xs px-4 py-2 rounded-lg shadow border border-gray-100 dark:border-gray-800 focus:outline-none hover:bg-gray-300 dark:hover:bg-app-neutral-800 font-medium flex items-center gap-1.5 text-gray-900 dark:text-gray-200">
						<span>Go to promote</span>
						<LuBadgePercent size={18} className="inline" />
					</button>
				</div>
			</header>
			<div>
				<div className="flex flex-col sm:items-center sm:flex-row [&>*]:flex-1 gap-2">
					{products.map((item, key) => (
						<ShareProductCard
							key={key}
							{...item}
							isSelected={false}
							onSelect={() => {
								console.log(item.price);
							}}
						/>
					))}
				</div>
				<div className="p-4">
					<div className="py-2">
						<p className="text-gray-500 dark:text-gray-400 py-2">
							50% of customers explore products because the the
							author share them on social media network. Get your
							earnings right now!🔥
						</p>
					</div>
					<div className="btn-group flex items-center justify-evenly [&>*]:flex-1 gap-x-4 text-2xl">
						<button className="flex items-center justify-center py-2 px-4 rounded-lg border text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-900 shadow">
							<div className="flex text-center">
								<RiFacebookLine className="md:mr-2" />
								<p className="hidden md:block text-sm font-bold text-black dark:text-white">
									Facebook
								</p>
							</div>
						</button>
						<button className="flex items-center justify-center py-2 px-4 rounded-lg border text-gray-600 hover:bg-gray-100 shadow dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-900">
							<div className="flex text-center">
								<CiTwitter className="md:mr-2" />
								<p className="hidden md:block text-sm font-bold text-black dark:text-white">
									Twitter
								</p>
							</div>
						</button>
						<button className="flex items-center justify-center py-2 px-4 rounded-lg border text-gray-600 hover:bg-gray-100 shadow dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-900">
							<div className="flex text-center">
								<BiLogoInstagram className="md:mr-2" />
								<p className="hidden md:block text-sm font-bold text-black dark:text-white">
									Instagram
								</p>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShareProducts;
