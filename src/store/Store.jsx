import { configureStore } from '@reduxjs/toolkit';
import Auth from '../features/auth/Auth';
import Cart from '../features/addToCart';

export const Store = configureStore({
	reducer: {
		auth: Auth,
		cart: Cart,
	},
});
