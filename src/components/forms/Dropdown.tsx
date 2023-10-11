'use client';
import { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export interface DropdownData {
	id: string;
	value: string;
	type: string;
}
interface Props {
	placeholder?: string;
	selectedValue: DropdownData;
	setSelectedValue: React.Dispatch<React.SetStateAction<DropdownData>>;
	data: DropdownData[];
	required?: boolean;
	errorText?: any;
}

export default function Dropdown({
	placeholder,
	selectedValue,
	setSelectedValue,
	data,
}: Props) {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string>(
		selectedValue?.value || ''
	);
	const inputRef = useRef<any>();

	useEffect(() => {
		const handler = (event: any) => {
			if (inputRef.current && !inputRef.current.contains(event.target)) {
				setShowMenu(false);
			}
		};

		window.addEventListener('click', handler);
		return () => {
			window.removeEventListener('click', handler);
		};
	}, []);

	const handleOpenMenu = () => {
		setShowMenu((prevState) => !prevState);
	};

	const getDisplay = () => {
		if (selectedOption !== '')
			return (selectedValue.value = selectedOption);
		return placeholder;
	};

	const selectClickItem = (option: DropdownData) => {
		setSelectedOption(option?.value);
		setSelectedValue(option);
	};

	return (
		<div>
			<div className="bg-white dark:bg-app-neutral-500 border dark:border-transparent text-left relative rounded-lg w-full">
				<button
					ref={inputRef}
					onClick={handleOpenMenu}
					className="flex w-full select-none items-center justify-between gap-x-4 py-2 px-4"
				>
					<div className="dropdown-selected-value text-sm text-gray-600 dark:text-gray-50 font-medium">
						{getDisplay()}
					</div>

					<div className="caret text-gray-600 dark:text-gray-50">
						{showMenu ? <FiChevronUp /> : <FiChevronDown />}
					</div>
				</button>
				{showMenu && (
					<div className="absolute z-10 max-h-[10rem] w-full translate-y-1 overflow-auto rounded-lg shadow bg-white dark:bg-app-neutral-500 flex flex-col dark:border dark:border-gray-700">
						{data.length > 0 ? (
							data.map((option: DropdownData, index: number) => {
								return (
									<div
										key={index}
										onClick={() => selectClickItem(option)}
										className="cursor-pointer text-sm py-1.5 px-4 hover:bg-slate-100 dark:hover:bg-app-neutral-600 dark:bg-app-neutral-500 dark:text-gray-50"
									>
										{option?.value}
									</div>
								);
							})
						) : (
							<div>
								<p>No options</p>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
