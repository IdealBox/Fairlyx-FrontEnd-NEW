import React from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { PiWarningCircleFill } from 'react-icons/pi';

export interface Props {
	planType: 'lte' | 'pro' | 'free';
	caption: string;
	rate: number; // number between 1 and 100
	features: string[];
	buttonText: string;
	recommended?: boolean;
}

const PlanCard = ({
	planType,
	caption,
	rate,
	features,
	buttonText,
	recommended,
}: Props) => {
	return (
		<div className="w-full p-8 bg-white max-w-md">
			<header className="mb-4">
				<div className="flex items-center justify-start gap-4 my-2">
					<h1
						className={
							planType === 'pro'
								? "text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:rounded-sm flex items-center gap-2 before:bg-secondary-2"
								: "text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:rounded-sm flex items-center gap-2 before:bg-secondary-3"
						}
					>
						{planType === 'lte' && 'Lite'}
						{planType === 'pro' && 'Pro'}
					</h1>
					{recommended && (
						<span className="px-4 py-1.5 text-xs bg-secondary-4 rounded-full">
							Recommended
						</span>
					)}
				</div>
				<p className="text-sm text-gray-500 py-4">{caption}</p>
			</header>
			<div className="py-8 border-y border-gray-100">
				<div className="flex items-center gap-5">
					<span className="font-bold leading-loose text-5xl">
						{rate}%
					</span>
					<div className="flex-1 flex items-center justify-between text-gray-500 font-medium">
						<span className="text-xs max-w-[75%]">
							of the monthly income you earn on the market.
						</span>

						<PiWarningCircleFill />
					</div>
				</div>
			</div>
			<div className="py-8">
				<ul className="flex flex-col gap-y-5">
					{features.map((feature, key) => {
						return (
							<li className="flex items-center gap-4">
								<BsCheck2 className="text-green-400" />
								<p
									className="text-gray-800 text-sm font-medium"
									key={key}
								>
									{feature}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
			<button
				className={`${
					planType === 'pro'
						? 'bg-blue-600 hover:bg-blue-700 '
						: 'hover:bg-blue-50 '
				}" text-gray-50 w-full py-2 font-semibold rounded-lg text-sm mt-4"`}
			>
				{buttonText}
			</button>
		</div>
	);
};

export default PlanCard;
