import React from 'react';
import { ProductType } from '../../../../interfaces/productInterfaces';

interface Props {
	imageSize?: number;
	imageOrientation?: 'square' | 'landscape';
	product: Pick<ProductType, 'title' | 'category' | 'imageUrl' | 'price'>; // A product with only title, category and imageUrl
}

const ProductInfo = ({ product, imageSize, imageOrientation }: Props) => {
	return (
		<div className="flex items-start gap-4">
			<img
				style={{
					aspectRatio:
						imageOrientation === 'landscape' ? 16 / 9 : 1 / 1,
					height: imageSize,
					width: 'auto',
				}}
				src={product.imageUrl}
				className="w-16 h-16 object-cover rounded-lg"
				alt=""
			/>
			<div className="flex flex-col gap-1">
				<h1 className="w-full font-semibold dark:text-gray-300 text-gray-800">
					{product.title}
				</h1>
				<div className="flex items-center gap-2 text-xs font-medium">
					<span className="sm:hidden text-gray-800 bg-shade-100">
						{product.price}
					</span>
					<span className="flex-1 text-gray-500">
						{product.category}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
