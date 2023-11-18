import React, { useState } from 'react';
import Dropdown from '../../../../components/forms/Dropdown';
import { IoLink } from 'react-icons/io5';
import { BiCopy } from 'react-icons/bi';
import Avatar from '../../../../components/Avatar';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const CreateLink = () => {
	const [selectedValue, setSelectedValue] = useState({
		id: '',
		value: '',
		type: '',
	});
	return (
		<div className="py-4 bg-white dark:bg-app-neutral-700 px-4 rounded-xl">
			<header className="flex items-center justify-between">
				<div>
					<h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-[''] before:w-4 before:aspect-[2/4] before:bg-secondary-2 before:rounded-sm flex items-center gap-2">
						Product Activity
					</h1>
				</div>
			</header>
			<div className="flex flex-col gap-5">
				<div className="mt-4">
					<h2 className="text-gray-600 dark:text-gray-300 py-4 font-medium">
						Promote any product with a simple link
					</h2>
					<div className="flex flex-col gap-4">
						<Dropdown
							selectedValue={selectedValue}
							setSelectedValue={setSelectedValue}
							placeholder="Choose your product"
							data={[]}
						/>
						<input
							className="py-2 px-4 text-gray-600 dark:text-gray-400
                            dark:bg-transparent dark:ring-2 dark:ring-gray-700 font-medium rounded-lg focus:outline-none bg-gray-100 block min-w-0 w-full"
							type="text"
							placeholder="Or enter a product link"
						/>
						<button className="py-2 px-4 rounded-lg text-white font-medium bg-blue-500 hover:bg-blue-600 text-sm w-fit">
							Create
						</button>
					</div>
				</div>
				<div>
					<p className="text-sm text-gray-600 dark:text-gray-400 py-4">
						Use this link to promote.
					</p>
					<div className="flex items-center gap-4 rounded-lg ring-2 ring-cyan-500 px-4 py-2 text-gray-500 dark:text-gray-400">
						<IoLink />
						<input
							value="https://ui8.net/rel=tmtt"
							type="text"
							className="bg-transparent focus:outline-none flex-1"
						/>
						<BiCopy />
					</div>
				</div>
				<div>
					<p className="text-sm font-medium text-gray-600 dark:text-gray-400 py-4">
						Show to social accounts
					</p>

					<div className="flex flex-row justify-between">
						<div className="flex flex-row items-center gap-5">
							<div className="rounded-full relative w-fit">
								<Avatar
									imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									size={48}
								/>

								<div className="absolute -bottom-0.5 -right-2 rounded-full p-0.5 bg-white dark:bg-gray-100 text-blue-500 h-fit w-fit text-xl">
									<AiFillTwitterCircle />
								</div>
							</div>

							<div className="rounded-full relative w-fit">
								<Avatar
									imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									size={48}
								/>

								<div className="absolute -bottom-0.5 -right-2 rounded-full p-0.5 bg-white dark:bg-gray-100 text-blue-500 h-fit w-fit text-xl">
									<FaFacebook />
								</div>
							</div>
						</div>
						<div>
							<button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 font-medium text-sm">
								<span>Share</span>
								<BsArrowRight className="inline ml-2" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateLink;
