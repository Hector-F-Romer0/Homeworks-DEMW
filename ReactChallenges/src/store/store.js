import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";
import { authSlice } from "./slices/auth/AuthSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
});
