import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './signupAction';
import { loginUser } from './loginAction';
import axios from 'axios';

let userState = {};
const localStorageValue = window.localStorage.getItem('user');
if (localStorageValue) {
	userState = JSON.parse(localStorageValue);
}
const initialState = {
	userState: userState,
	loading: false,
	userInfo: {}, // for user object
	userToken: null, // for storing the JWT
	error: null,
	success: false, // for monitoring the registration process.
};
export const Auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		// register user
		[registerUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[registerUser.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = true; // registration successful
		},
		[registerUser.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		//login users
		[loginUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[loginUser.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = true; // registration successful
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { onLogin } = Auth.actions;

export default Auth.reducer;
