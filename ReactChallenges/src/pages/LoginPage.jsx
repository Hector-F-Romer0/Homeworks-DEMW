import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const username = e.target[0].value.trim();
		const password = e.target[1].value.trim();

		if (username === "" || password === "") {
			alert("Los campos de ingreso están vacíos");
		}

		setUser({ username, password });
		const lastPath = localStorage.getItem("LastPath") || "/";
		navigate(lastPath, { replace: true });
	};

	return (
		<div className="card w-50 mx-auto">
			<div className="card-body">
				<h1 className="card-title">Log in 👥</h1>
				<form onSubmit={(e) => handleSubmit(e)} className="col-5">
					<div className="mb-3 form-label">
						<label htmlFor="">Username</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mb-3 form-label">
						<label htmlFor="">Password</label>
						<input type="password" className="form-control" />
					</div>
					<button className="btn btn-outline-primary mt-3">Log In</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
