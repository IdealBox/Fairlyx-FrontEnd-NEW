export interface UserType {
	name: string;
	email: string;
	id: string;
	imageUrl: string;
}

export interface ProductType {
	title: string;
	category: string;
	status: 'active' | 'inactive';
	imageUrl: string;
	price: string;
	salesAmount: string;
	increaseRate: number;
	views: number;
	likes: number;
	rating: number;
	traffic: {
		socialMedia: number;
		direct: number;
		uib: number;
		market: number;
		others: number;
	};
	viewers: { isFollower: boolean; info?: UserType }[];
}

export interface PopularProductType {
	title: string;
	category: string;
	status: 'active' | 'inactive';
	imageUrl: string;
	price: string;
}

export const popularProducts: PopularProductType[] = [
	{
		title: 'Crypter NFT',
		category: 'UI kit',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
	{
		title: 'Bento matte 3D',
		category: 'illustration 1.0',
		status: 'inactive',
		imageUrl: '',
		price: '445.54',
	},
	{
		title: 'Excellent material',
		category: '3D chair',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
	{
		title: 'Fleet-travel',
		category: 'shopping kit',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
];
