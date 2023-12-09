import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	selectedItem: any;
}

const initialState: InitialState = { selectedItem: null };
const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		selectItem: (state, action: PayloadAction<any>) => {
			state.selectedItem = action.payload;
		},
		removeItem: (state) => {
			state.selectedItem = null;
		},
	},
});

export const { selectItem, removeItem } = productSlice.actions;

export default productSlice.reducer;
