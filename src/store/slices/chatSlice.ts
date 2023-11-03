import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
	selectedChat: {
		user: string | null;
	};
}
const initialState: InitialState = { selectedChat: { user: null } };
const chatSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		selectChat: (state, action: PayloadAction<{ user: string }>) => {
			state.selectedChat = action.payload;
		},
	},
});

export const { selectChat } = chatSlice.actions;
export default chatSlice.reducer;
