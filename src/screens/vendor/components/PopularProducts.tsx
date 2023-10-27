import React from 'react';
import { PopularProductType } from '../../../interfaces/productInterfaces';

const popularProducts: PopularProductType[] = [
	{
		title: 'Crypter NFT',
		type: 'UI kit',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
	{
		title: 'Bento matte 3D',
		type: 'illustration 1.0',
		status: 'inactive',
		imageUrl: '',
		price: '445.54',
	},
	{
		title: 'Excellent material',
		type: '3D chair',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
	{
		title: 'Fleet-travel',
		type: 'shopping kit',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
];

interface PopularProductProps {
	products: PopularProductType[];
}

const PopularProducts = ({ products }: PopularProductProps) => {
	return (
		<div className=" py-5 w-full flex flex-col gap-y-5 bg-white dark:bg-app-neutral-700 rounded-xl p-5">
			<header className="flex items-center justify-between">
				<div>
					<div>
						<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-secondary-3 before:rounded-sm flex items-center gap-2">
							Popular Products
						</h1>
					</div>
				</div>
			</header>
			<div className="flex flex-col divide-y dark:divide-gray-600">
				<div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
					<h1>Product</h1>
					<h1>Earning</h1>
				</div>
				<div className="flex flex-col gap-y-2 pt-4">
					{products.map((prod, index) => (
						<ProductItem key={index} product={prod} />
					))}
				</div>
			</div>
			<div>
				<button className="place-self-center border hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-900 rounded-xl px-4 py-2 text-gray-600 dark:text-gray-50 w-full">
					All products
				</button>
			</div>
		</div>
	);
};

export default PopularProducts;

const ProductItem = ({ product }: { product: PopularProductType }) => {
	return (
		<div className="flex items-center justify-between">
			<div className="py-2 flex gap-x-4">
				<img
					src={
						product.imageUrl || require('../../../assets/tatia.jpg')
					}
					className="max-h-[3.5rem] aspect-square object-cover object-center rounded-xl"
					alt=""
				/>
				<div>
					<h1 className="font-medium text-gray-600 dark:text-gray-50">
						{product.title}
					</h1>
					<p className="text-gray-600 font-semibold dark:text-gray-50">
						{product.type}
					</p>
				</div>
			</div>
			<div className="flex flex-col items-end gap-y-1">
				<h3 className="text-gray-600 dark:text-gray-50 text-sm font-semibold">
					${product.price}
				</h3>
				<span
					className={`rounded-md text-xs font-medium px-1.5 py-1 w-fit ${
						product.status === 'active'
							? 'bg-secondary-4/50 text-primary-2'
							: 'bg-secondary-1/50 text-secondary-1'
					}`}
				>
					{product.status === 'active' ? 'Active' : 'Inactive'}
				</span>
			</div>
		</div>
	);
};
