import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

import { register, login } from "./AuthSlice";
import { auth } from "../../../firebase/config";

export const registerAuth = (email, password) => {
	return async (dispatch) => {
		const response = await createUserWithEmailAndPassword(auth, email, password);
		if (response) {
			await updateProfile(auth.currentUser, {
				displayName: "Jonathan",
				photoURL: "",
			});

			const { email } = response.user;
			dispatch(register({ email }));
		} else {
			console.log("HOLA");
			throw new Error("REGISTER- Login failed.");
		}
	};
};

export const loginAuth = (email, password) => {
	return async (dispatch) => {
		const response = await signInWithEmailAndPassword(auth, email, password);
		if (response) {
			console.log(response);
			const { uid, email, displayName, photoURL } = response.user;
			dispatch(login({ uid, email, displayName, photoURL }));
			navigate("/home");
			// const { email } = response.user;
			// dispatch(register({ email }));
		} else {
			throw new Error("Login failed.");
		}
	};
};

export const loginGoogleAuth = (email, password) => {
	return async (dispatch) => {
		const googleProvider = new GoogleAuthProvider();
		const response = await signInWithPopup(auth, googleProvider);
		if (response) {
			console.log(response);
			const { uid, email, displayName, photoURL } = response.user;
			dispatch(login({ uid, email, displayName, photoURL }));
			// const { email } = response.user;
			// dispatch(register({ email }));
		} else {
			throw new Error("Login failed.");
		}
	};
};
