import { createSlice } from '@reduxjs/toolkit';
interface InitialState {
	selectedCustomer: { name: string; email: string } | null;
}

const initialState = { selectedCustomer: null };
const customerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
		selectCustomer: (state, action) => {
			state.selectedCustomer = action.payload;
		},
	},
});

export const { selectCustomer } = customerSlice.actions;

export default customerSlice.reducer;
