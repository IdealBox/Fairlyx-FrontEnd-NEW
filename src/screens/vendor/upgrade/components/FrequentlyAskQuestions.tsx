import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CiCircleMinus } from 'react-icons/ci';

const FrequentlyAskQuestions = () => {
	const frequentlyAskQuestions = [
		{
			question: 'How to upgrade to Pro plan',
			answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla consequatur eum beatae a magnam. Quas atque sit cupiditate nostrum obcaecati? Officia reprehenderit molestias dicta architecto consequuntur temporibus mollitia ea? Facilis.',
		},
		{
			question: 'I forgot my password',
			answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla consequatur eum beatae a magnam. Quas atque sit cupiditate nostrum obcaecati? Officia reprehenderit molestias dicta architecto consequuntur temporibus mollitia ea? Facilis.',
		},
		{
			question: 'How can I reset my password',
			answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla consequatur eum beatae a magnam. Quas atque sit cupiditate nostrum obcaecati? Officia reprehenderit molestias dicta architecto consequuntur temporibus mollitia ea? Facilis.',
		},
		{
			question: 'How do I change & reset my password',
			answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla consequatur eum beatae a magnam. Quas atque sit cupiditate nostrum obcaecati? Officia reprehenderit molestias dicta architecto consequuntur temporibus mollitia ea? Facilis.',
		},
		{
			question: 'How to upgrade to Pro plan',
			answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla consequatur eum beatae a magnam. Quas atque sit cupiditate nostrum obcaecati? Officia reprehenderit molestias dicta architecto consequuntur temporibus mollitia ea? Facilis.',
		},
	];
	return (
		<div className="w-full py-8">
			<h1 className="leading-loose text-4xl font-semibold text-gray-800 dark:text-gray-50">
				Frequently Ask Questions
			</h1>

			<div className="w-full bg-white dark:bg-app-neutral-700 rounded-lg overflow-hidden sm:p-4 lg:p-8 flex gap-4 lg:gap-8">
				<nav className="hidden md:block w-full max-w-sm">
					<ul className="flex flex-col">
						<li className="py-2 px-4 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-50 dark:hover:bg-gray-700  hover:bg-gray-200">
							Getting started
						</li>
						<li className="py-2 px-4 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-50 dark:hover:bg-gray-700  hover:bg-gray-200">
							Login & Signup
						</li>
						<li className="py-2 px-4 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-50 dark:hover:bg-gray-700  hover:bg-gray-200">
							Billing & Payments
						</li>
						<li className="py-2 px-4 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-50 dark:hover:bg-gray-700  hover:bg-gray-200">
							My payments
						</li>
						<li className="py-2 px-4 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-50 dark:hover:bg-gray-700  hover:bg-gray-200">
							Accounts
						</li>
					</ul>
				</nav>
				<div className="flex-1">
					<ul>
						{frequentlyAskQuestions.map((qa, key) => (
							<li>
								<QA {...qa} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FrequentlyAskQuestions;

const QA = (qa: { question: string; answer: string }) => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<div>
			<h3
				className="select-none py-4 border-b border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-300 font-medium flex items-center justify-between"
				onClick={() => {
					setShowDetails((state) => !state);
				}}
			>
				<span>{qa.question}</span>
				{showDetails ? <CiCircleMinus /> : <AiOutlinePlusCircle />}
			</h3>
			{showDetails && (
				<p className="py-4 text-gray-600 dark:text-gray-400">
					{qa.answer}
				</p>
			)}
		</div>
	);
};
