import { ProductType } from '../../../../interfaces/productInterfaces';
import MarketProductItem from './MarketProductItem';

const ProductStatTable = () => {
	const products: ProductType[] = [
		{
			title: 'Bento Matte 3D',
			category: 'UI design kit',
			imageUrl:
				'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&q=80&w=1408&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			status: 'inactive',
			views: 50,
			likes: 10,
			price: '54',
			increaseRate: 55.5,
			rating: 4.7,
			salesAmount: '3,200',
			traffic: {
				market: 453,
				direct: 500,
				others: 945,
				socialMedia: 2000,
				uib: 50,
			},
			viewers: [
				{ isFollower: false },

				{ isFollower: true },
				{ isFollower: false },
				{ isFollower: true },
			],
		},
		{
			title: 'Bento Matte 3D',
			category: 'UI design kit',
			imageUrl:
				'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&q=80&w=1408&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			status: 'active',
			views: 79,
			likes: 13,
			price: '54',
			increaseRate: 55.5,
			rating: 4.7,
			salesAmount: '3,200',
			traffic: {
				market: 453,
				direct: 500,
				others: 945,
				socialMedia: 2000,
				uib: 50,
			},
			viewers: [
				{ isFollower: false },

				{ isFollower: true },
				{ isFollower: false },
				{ isFollower: true },
			],
		},
	];
	return (
		<div className="w-full">
			<div className="flex flex-col py-3 sm:hidden">
				{products.map((product, key) => (
					<MarketProductItem key={key} product={product} />
				))}
			</div>
			<table className="hidden sm:table table-auto mt-5 w-full">
				<thead className="text-left [&>*]:font-medium text-gray-500 py-2">
					<th>
						<input
							type="checkbox"
							className="h-5 aspect-square border-none rounded-lg"
						/>
					</th>
					<th>Product</th>
					<th>Status</th>
					<th>Price</th>
					<th>Sales</th>
					<th>Views</th>
					<th>Likes</th>
				</thead>
				<tbody className="divide-y divide-gray-100">
					{products.map((product, key) => (
						<MarketProductItem product={product} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductStatTable;
