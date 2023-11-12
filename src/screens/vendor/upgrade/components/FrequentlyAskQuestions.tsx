import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

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
		<div className="w-full">
			<h1 className="leading-loose text-4xl font-semibold">
				Frequently Ask Questions
			</h1>

			<div className="w-full bg-white rounded-lg overflow-hidden sm:p-4 lg:p-8 flex">
				<nav className="w-full max-w-sm">
					<ul className="flex flex-col">
						<li className="py-2 px-4 rounded-lg text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-200">
							Getting started
						</li>
						<li className="py-2 px-4 rounded-lg text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-200">
							Login & Signup
						</li>
						<li className="py-2 px-4 rounded-lg text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-200">
							Billing & Payments
						</li>
						<li className="py-2 px-4 rounded-lg text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-200">
							My payments
						</li>
						<li className="py-2 px-4 rounded-lg text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-200">
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
				className="select-none py-4 border-b text-gray-800 font-medium flex items-center justify-between"
				onClick={() => {
					setShowDetails((state) => !state);
				}}
			>
				<span>{qa.question}</span>
				<AiOutlinePlusCircle />
			</h3>
			{showDetails && <p className="py-4 text-gray-600">{qa.answer}</p>}
		</div>
	);
};
