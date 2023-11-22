import React from 'react';
import ShopModal from './components/ShopModal';
import ShopProductDetailModal from './components/ShopProductDetailModal';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { removeItem } from '../../../store/slices/productSlice';
const ShopingPage = () => {
	const selectedItem = useAppSelector(
		(state) => state.productItem.selectedItem
	);
	const dispatch = useAppDispatch();

	return (
		<div className="h-full bg-gray-100 dark:bg-transparent">
			<div className="max-h-[50%] w-full overflow-hidden">
				<img
					src="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2lnbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
					className="object-center object-cover w-full"
				/>
			</div>
			<div className="-translate-y-28 px-4">
				<ShopModal />
			</div>
			<div className="">
				{selectedItem && (
					<ShopProductDetailModal
						onClose={() => {
							dispatch(removeItem());
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default ShopingPage;
