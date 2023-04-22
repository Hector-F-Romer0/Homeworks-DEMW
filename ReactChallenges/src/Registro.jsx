import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";

import { useForm } from "./hooks/useForm";
import { registerAuth, logOutAuth, loginGoogleAuth, loginAuth } from "./store/slices/auth/thunks";
import { logout, register } from "./store/slices/auth/AuthSlice";
import UserAuthInfo from "./components/UserAuthInfo";

const Registro = () => {
	const dispatch = useDispatch();

	const formRegister = useForm({
		email: "jlopez0313@gmail.com",
		password: "123456",
	});

	const formLogin = useForm({
		email: "jlopez0314@gmail.com",
		password: "123456",
	});

	const authData = useSelector((state) => state.auth);

	const isAuthenticateMemo = useMemo(() => {
		if (authData.status === "Logged in") {
			return true;
		} else {
			return false;
		}
	}, [authData.status]);

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (!user) return dispatch(logout());
			dispatch(register({ email: user.email }));
		});
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (!user) return dispatch(logout());
			dispatch(register({ email: user.email }));
		});
	}, []);

	const onSubmit = (e) => {
		try {
			e.preventDefault();
			console.log(formRegister.formState);
			dispatch(registerAuth(formRegister.email, formRegister.password));
		} catch (error) {
			console.log("ERRROR IN REGISTER");
			console.log(error);
		}
	};

	const onSubmitLogin = (e) => {
		e.preventDefault();
		console.log(formLogin.formState);
		dispatch(loginAuth(formLogin.email, formLogin.password));
		// navigate("/home");
	};

	const handleGoogleSignIn = () => {
		try {
			dispatch(loginGoogleAuth());
		} catch (error) {
			console.log("eRROR");
			console.log(error);
		}
	};

	const handleLogOut = () => {
		try {
			dispatch(logOutAuth());
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h1>Registro</h1>
			<hr />
			<form action="" onSubmit={(e) => onSubmit(e)}>
				<input
					type="email"
					name="email"
					onChange={(e) => formRegister.onInputChange(e)}
					value={formRegister.email}
				/>
				<input
					type="password"
					name="password"
					onChange={(e) => formRegister.onInputChange(e)}
					value={formRegister.password}
				/>
				<button type="submit">Registro</button>
			</form>
			<hr />
			<h1>Log IN</h1>
			<hr />
			<form action="" onSubmit={(e) => onSubmitLogin(e)}>
				<input type="email" name="email" onChange={(e) => formLogin.onInputChange(e)} value={formLogin.email} />
				<input
					type="password"
					name="password"
					onChange={(e) => formLogin.onInputChange(e)}
					value={formLogin.password}
				/>
				<button type="submit" disabled={isAuthenticateMemo}>
					Log in
				</button>
			</form>
			<button onClick={() => handleGoogleSignIn()} disabled={isAuthenticateMemo}>
				Sign In with Google
			</button>
			<hr />
			<button onClick={() => handleLogOut()} disabled={!isAuthenticateMemo}>
				LogOut
			</button>
			<hr />

			{isAuthenticateMemo ? <UserAuthInfo data={authData} /> : ""}
		</>
	);
};

export default Registro;
