// authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const loginUser = createAsyncThunk('auth/login', async ({ employeeEmail, employeePassword }, { rejectWithValue }) => {
	try {
		// configure header's Content-Type as JSON
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.post(`http://localhost:3977/api/auth/login`, { employeeEmail, employeePassword }, config);
		// store user's token in local storage
		window.localStorage.setItem('user', JSON.stringify(data));
		return data;
	} catch (error) {
		// return custom error message from backend if present
		if (error.response && error.response.data.message) {
			return rejectWithValue(error.response.data.message);
		} else {
			return rejectWithValue(error.message);
		}
	}
});
