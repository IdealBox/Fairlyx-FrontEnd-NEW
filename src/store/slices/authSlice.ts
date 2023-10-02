import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	isAuthenticated: boolean;
	userType: 'customer' | 'vendor' | 'admin';
}

const initialState: Partial<InitialState> = {
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
});

//All reducers are exported here
export const {} = authSlice.actions;
export default authSlice.reducer;
