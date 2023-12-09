import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appThemeReducer from './slices/appThemeSlice';
import chatReducer from './slices/chatSlice';
import productReducer from './slices/productSlice';
export const store = configureStore({
	reducer: {
		user: authReducer,
		theme: appThemeReducer,
		chat: chatReducer,
		productItem: productReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
