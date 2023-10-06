/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins'],
				inter: ['Inter'],
			},
			colors: { neutral: {
				"00": "#FFFFFF",
				"01": "#FCFCFC",
				"02": "#EDECF9",
				"03": "#EFEFEF",
				"04": "#6F767E",
				"05": "#33383F",
				"06": "#272B30",
				"07": "#1A1D1F",
				"08": "#111315",
				shade1: "#6F767E",
				shade2: "#11131580",
				shade3: "#9A9FA5",
			  },
			  primary: {
				"01": "#2A85FF",
				"02": "#83BF6E",
				W75: "#EDE9E9",
				W100: "#E6E0E0",
				W200: "#DBD3D3",
				W250: "#667085",
				W300: "#BFB6B6",
				W400: "#948D8D",
				W500: "#817B7B",
				W700: "#4E4B4B",
				W800: "#343232",
				W900: "#1A1919",
			  },
			  secondary: {
				S500: "#DEFF98",
				S700: "#81994D",
			  },},
		},
	},
	plugins: [],
	darkMode: 'class',
};
