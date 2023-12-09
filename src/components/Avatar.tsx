import React, { ReactElement } from 'react';
interface AvatarProps {
	nameInitials?: string | ReactElement;
	title?: string;
	size?: number;
	imageSrc?: string;
}
const Avatar = ({ nameInitials, imageSrc, title, size }: AvatarProps) => {
	return imageSrc ? (
		<div className="flex flex-col items-center justify-center w-fit aspect-square rounded-full overflow-hidden">
			<img
				src={imageSrc}
				style={{ height: size, width: size }}
				alt={title}
				className="min-h-[50px] max-h-32 object-cover object-center"
			/>
		</div>
	) : (
		<div
			style={{ height: size, width: size }}
			className="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-shade-400 flex items-center justify-center rounded-full min-w-[24px] aspect-square text-sm w-fit"
		>
			<p className="w-fit">{nameInitials || 'FX'}</p>
		</div>
	);
};

export default Avatar;
