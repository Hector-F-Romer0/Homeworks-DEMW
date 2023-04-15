import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "./hooks/useForm";
import { loginAuth, loginGoogleAuth } from "./store/slices/auth/thunks";
import { onAuthStateChanged } from "firebase/auth";
import { logout, register } from "./store/slices/auth/AuthSlice";
import { auth } from "./firebase/config";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
	// const { auth } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { email, password, onInputChange, formState } = useForm({
		email: "jlopez0313@gmail.com",
		password: "123456",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
		dispatch(loginAuth(email, password));
		navigate("/home");
	};

	const handleGoogleSignIn = () => {
		try {
			dispatch(loginGoogleAuth());
		} catch (error) {
			console.log("eRROR");
			console.log(error);
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (!user) return dispatch(logout());
			dispatch(register({ email: user.email }));
		});
	}, []);
	return (
		<>
			<h1>Log IN</h1>
			<hr />
			<form action="" onSubmit={(e) => onSubmit(e)}>
				<input type="email" name="email" onChange={(e) => onInputChange(e)} value={email} />
				<input type="password" name="password" onChange={(e) => onInputChange(e)} value={password} />

				<button type="submit">Registro</button>
			</form>
			<button onClick={() => handleGoogleSignIn()}>Sign In with Google</button>
			<hr />
		</>
	);
};

export default LogIn;
