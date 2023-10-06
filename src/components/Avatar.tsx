import React from 'react';
interface AvatarProps {
	image: string;
	title?: string;
	size?: number;
}
const Avatar = ({ image, title, size }: AvatarProps) => {
	const imageUrlRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
	const isImageUrl = imageUrlRegex.test(image);
	return (
		<div className="flex flex-col items-center justify-center gap-4 w-fit">
			{isImageUrl ? (
				<img
					src={image}
					style={{ height: size, width: size }}
					alt={title}
					className="min-h-[50px] max-h-32 aspect-square object-cover object-center rounded-full shadow"
				/>
			) : (
				<div>{image.split('').slice(0, 2)}</div>
			)}
		</div>
	);
};

export default Avatar;
