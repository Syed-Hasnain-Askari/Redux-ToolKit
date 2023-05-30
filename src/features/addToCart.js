import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			console.log(action.payload, 'from action');
			const { id, name, image, description, price } = action.payload;
			const itemInCart = state.find((item) => item.id === id);
			if (itemInCart) {
				console.log(itemInCart, 'this is item cart');
				itemInCart.quantity++;
			} else {
				state.push({ id, name, image, description, price, quantity: 1 });
			}
		},
		incrementQuantity: (state, action) => {
			console.log(action.payload);
			const item = state.find((item) => item.id === action.payload);
			item.quantity++;
		},
		decrementQuantity: (state, action) => {
			console.log(action.payload);
			const item = state.find((item) => item.id === action.payload);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		removeItem: (state, action) => {
			console.log(state, 'CART ITEMS');
			const removeItem = state.filter((item) => item.id !== action.payload);
			return removeItem;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
