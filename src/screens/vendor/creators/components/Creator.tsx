import React from 'react';
import Avatar from '../../../../components/Avatar';

const Creator = () => {
	return (
		<div>
			<div className="flex items-center gap-2">
				<Avatar
					size={64}
					imageSrc="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					nameInitials={'KL'}
				/>
				<div>
					<h2 className="font-bold text-gray-800">
						Reed Parker
						<span className="py-1 px-1.5 ml-2 bg-secondary-4 rounded-md">
							#1
						</span>
					</h2>
					<p className="text-sm text-gray-500 py-1.5">
						<span className="font-semibold">16</span> products
						<span className="px-2 text-gray-400 text-xs">|</span>
						<span className="font-semibold">3568</span> followers
					</p>
				</div>
			</div>
		</div>
	);
};

export default Creator;
