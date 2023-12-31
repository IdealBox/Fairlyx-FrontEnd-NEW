import React, { useEffect, useState } from 'react';
import { MdOutlineCheck } from 'react-icons/md';

interface Props {
	checked?: boolean;
	onSelected?: (checked: boolean) => void;
}
const CheckBox = ({ checked, onSelected }: Props) => {
	const [check, setChecked] = useState(false);
	useEffect(() => {
		if (checked) {
			setChecked(true);
		} else {
			setChecked(false);
		}
	}, []);

	return (
		<button
			onClick={() => {
				setChecked((state) => !state);
				if (onSelected) {
					onSelected(checked as boolean);
				}
			}}
			className={`rounded-md w-5 aspect-square text-white text-transparent flex items-center justify-center ${
				check
					? 'bg-blue-500 text-white'
					: 'border-2 dark:border-gray-800'
			}`}
		>
			{check && <MdOutlineCheck />}
		</button>
	);
};

export default CheckBox;
