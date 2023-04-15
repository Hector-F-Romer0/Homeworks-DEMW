import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "./hooks/useForm";
import { registerAuth } from "./store/slices/auth/thunks";
import { onAuthStateChanged } from "firebase/auth";
import { logout, register } from "./store/slices/auth/AuthSlice";
import { auth } from "./firebase/config";

const Registro = () => {
	const dispatch = useDispatch();

	const { email, password, onInputChange, formState } = useForm({
		email: "jlopez0313@gmail.com",
		password: "123456",
	});

	const onSubmit = (e) => {
		try {
			e.preventDefault();
			console.log(formState);
			dispatch(registerAuth(email, password));
		} catch (error) {
			console.log("ERRROR IN REGISTER");
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
			<h1>Registro</h1>
			<hr />
			<form action="" onSubmit={(e) => onSubmit(e)}>
				<input type="email" name="email" onChange={(e) => onInputChange(e)} value={email} />
				<input type="password" name="password" onChange={(e) => onInputChange(e)} value={password} />
				<button type="submit">Registro</button>
			</form>
		</>
	);
};

export default Registro;
