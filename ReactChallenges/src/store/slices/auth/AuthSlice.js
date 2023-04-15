import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		status: "checking",
		uid: null,
		email: null,
		displayName: null,
		photoUrl: null,
		errorMessage: null,
	},
	reducers: {
		register: (state, action) => {
			state.email = action.payload.email;
		},
		logout: (state, action) => {},
		checkingCredentials: (state, action) => {
			console.log("Checking");
		},
		login: (state, action) => {
			state.uid = action.payload.uid;
			state.email = action.payload.email;
			state.displayName = action.payload.displayName;
			state.photoUrl = action.payload.photoUrl;
			state.status = "Logged in";
		},
	},
});

export const { register, logout, checkingCredentials, login } = authSlice.actions;
