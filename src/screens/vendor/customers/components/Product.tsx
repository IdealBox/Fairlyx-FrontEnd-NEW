import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import CheckBox from '../../shop/components/CheckBox';
import { IoTimeOutline } from 'react-icons/io5';

interface Props {
	onSelect: () => void;
	image: string;
	title: string;
	price: string;
	scheduledTime: Date;
	isSelected: boolean;
}

const ShareProductCard = ({
	onSelect,
	image,
	title,
	price,
	scheduledTime,
	isSelected,
}: Props) => {
	const [selected, setSelected] = useState<boolean>(false);

	useEffect(() => {
		if (isSelected) {
			setSelected(true);
		}
	}, []);

	return (
		<div
			onClick={() => {
				setSelected((state) => !state);
				onSelect();
			}}
			className="p-4 rounded-lg flex flex-col gap-4"
		>
			<div className="relative overflow-hidden rounded-lg h-fit max-h-60">
				<div className="absolute top-5 left-5 h-full w-full">
					<CheckBox
						checked={selected}
						onSelected={() => setSelected((state) => !state)}
					/>
				</div>
				<img
					src={image}
					className="aspect-video object-center object-cover rounded-lg"
				/>
			</div>
			<div className="flex items-start justify-between">
				<div>
					<h2 className="font-semibold text-gray-800 dark:text-gray-200 sm:max-w-[80%]">
						{title}
					</h2>
				</div>
				<div>
					<span className="p-2 bg-secondary-3 dark:bg-secondary-3/80 font-medium text-sm rounded-md text-gray-800">
						${price}
					</span>
				</div>
			</div>
			<div>
				<span className="flex items-center gap-2 text-sm font-medium text-gray-600">
					<IoTimeOutline className="inline" size={20} />{' '}
					<span>
						{scheduledTime.toDateString()} at{' '}
						{scheduledTime.toLocaleTimeString().slice(0, -6)}
					</span>
				</span>
			</div>
		</div>
	);
};

export default ShareProductCard;
