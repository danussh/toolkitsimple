import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getUsers = createAsyncThunk('users', async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/posts"
	);
	return response.data;
});

export const postUsers = createAsyncThunk('userspost', async (data) => {
	const response = await axios.post("https://jsonplaceholder.typicode.com/posts",{
		title:data
	})
	return response.data
});

