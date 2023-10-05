import { createSlice } from '@reduxjs/toolkit';

const appthemeSlice = createSlice({
	name: 'theme',
	initialState: {
		darkMode: true,
	},
	reducers: {
		setToLightMode: (state) => {
			state.darkMode = false;
		},
		setToDarkMode: (state) => {
			state.darkMode = true;
		},
	},
});

export const { setToLightMode, setToDarkMode } = appthemeSlice.actions;
export default appthemeSlice.reducer;
