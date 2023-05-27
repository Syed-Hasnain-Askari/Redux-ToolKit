// authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
export const registerUser = createAsyncThunk('auth/signup', async ({ email, password }, { rejectWithValue }) => {
	try {
		await fetch(`http://localhost:3977/api/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
	} catch (error) {
		// return custom error message from backend if present
		if (error.response && error.response.data.message) {
			return rejectWithValue(error.response.data.message);
		} else {
			return rejectWithValue(error.message);
		}
	}
});
