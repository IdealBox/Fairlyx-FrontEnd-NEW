import React, { useState } from 'react';
import {
	BiLeftArrowCircle,
	BiLoaderCircle,
	BiRightArrowCircle,
} from 'react-icons/bi';
import ProductStatTable from './ProductStatTable';
import ProductStatsNav from './ProductStatsNav';
interface Props {
	showHeader?: boolean;
	showFooterSection?: boolean;
	showLikes?: boolean;
	showRating?: boolean;
}
const ProductStats = ({
	showHeader = true,
	showFooterSection = true,
	showLikes = true,
	showRating,
}: Props) => {
	const [loading, setLoading] = useState(false);
	return (
		<div className="bg-white rounded-lg dark:bg-app-neutral-700 p-3 w-full">
			{showHeader && <ProductStatsNav />}

			<ProductStatTable />

			{/* pagination section */}
			{showFooterSection && (
				<div className="flex gap-5 justify-center dark:text-[#ffffff70] py-5">
					<BiLeftArrowCircle className="w-7 h-7 hidden md:flex cursor-pointer" />
					<BiRightArrowCircle className="w-7 h-7 hidden md:flex cursor-pointer" />
					{
						<button
							onClick={() => {
								setLoading(!loading);
							}}
							className="md:hidden text-[18px] dark:text-white dark:border-[#ffffff15] font-bold items-center gap-5 flex rounded-lg p-3 border"
						>
							<BiLoaderCircle
								className={`w-7 h-7 ${
									loading ? 'animate-spin' : ''
								}`}
							/>
							Load more
						</button>
					}
				</div>
			)}
		</div>
	);
};

export default ProductStats;
