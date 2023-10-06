export interface PopularProductType {
	title: string;
	type: string;
	status: 'active' | 'inactive';
	imageUrl: string;
	price: string;
}

export const popularProducts: PopularProductType[] = [
	{
		title: 'Crypter NFT',
		type: 'UI kit',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
	{
		title: 'Bento matte 3D',
		type: 'illustration 1.0',
		status: 'inactive',
		imageUrl: '',
		price: '445.54',
	},
	{
		title: 'Excellent material',
		type: '3D chair',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
	{
		title: 'Fleet-travel',
		type: 'shopping kit',
		status: 'active',
		imageUrl: '',
		price: '345.54',
	},
];
