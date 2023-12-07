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

	useEffect(() => {
		if (onSelected) {
			onSelected(checked ? checked : false);
		}
	}, [checked]);

	return (
		<button
			onClick={() => {
				setChecked((state) => !check);
			}}
			className={`border rounded-md w-5 aspect-square text-white text-transparent flex items-center justify-center ${
				check ? 'bg-blue-500 text-white' : ''
			}`}
		>
			{check && <MdOutlineCheck />}
		</button>
	);
};

export default CheckBox;
