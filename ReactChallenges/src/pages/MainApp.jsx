import React from "react";
import { Route, Routes, Navigate, Link, NavLink } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import NavComponent from "../components/NavComponent";

const MainApp = () => {
	return (
		<>
			<NavComponent />
			<h1>MainApp</h1>
			<hr />

			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="login" element={<LoginPage />}></Route>
				<Route path="about" element={<AboutPage />}></Route>
				<Route path="/*" element={<Navigate to="/about" />}></Route>
			</Routes>
		</>
	);
};

export default MainApp;
