import React from "react";
import { Route, Routes, Navigate, Link, NavLink } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import NavComponent from "../components/NavComponent";
import { UserProvider } from "../context/UserProvider";
import PrivateRoutes from "../components/PrivateRoutes";

const MainApp = () => {
	return (
		<UserProvider>
			<NavComponent />
			<h1>MainApp</h1>
			<hr />
			<Routes>
				<Route index element={<LoginPage />} />

				<Route element={<PrivateRoutes />}>
					<Route path="/home" element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
				</Route>
				<Route path="login" element={<LoginPage />} />
				<Route path="/*" element={<Navigate to="/about"></Navigate>} />
			</Routes>
		</UserProvider>
	);
};

export default MainApp;
