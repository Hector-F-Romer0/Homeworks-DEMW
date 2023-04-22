import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "./hooks/useForm";
import { logOutAuth, loginAuth, loginGoogleAuth } from "./store/slices/auth/thunks";
import { onAuthStateChanged } from "firebase/auth";
import { logout, register } from "./store/slices/auth/AuthSlice";
import { auth } from "./firebase/config";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
	// const { auth } = useSelector((state) => state.auth);

	return (
		<>
			<h1>Hola</h1>
		</>
	);
};

export default LogIn;
