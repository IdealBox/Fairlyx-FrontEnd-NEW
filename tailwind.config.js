/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins'],
				inter: ['Inter'],
			},
			colors: {
				shade: {
					100: '#9A9FA5',
					200: '#6F767E',
					300: '#6F767E66',
					400: '#33383F',
				},
				primary: {
					1: '#2A85FF',
					2: '#83BF6E',
					3: '#FF6A55',
					4: '#8E59FF',
				},
				secondary: {
					1: '#FFBC99',
					2: '#CABDFF',
					3: '#B1E5FC',
					4: '#B5E4CA',
					5: '#FFD88D',
				},
				neutral: {
					50: '#F4F4F4',
					100: '#EFEFEF',
					200: '#F4F4F4',
					300: '#EFEFEF',
					400: '#6F767E',
					500: '#33383F',
					600: '#272B30',
					700: '#1A1D1F',
					800: '#111315',
				},
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
