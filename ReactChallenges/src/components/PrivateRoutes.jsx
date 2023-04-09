import React, { useContext } from "react";
import { Navigate, useNavigate, Outlet, useLocation } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const PrivateRoutes = ({ children }) => {
	const { user } = useContext(UserContext);
	const { pathname, search } = useLocation();

	if (user?.username === "" || user?.password === "") {
		alert("You're not allowed to continue without sigin 👀");
		return <Navigate to={"/"} />;
	}
	localStorage.setItem("LastPath", `${pathname}${search}`);
	return children ? children : <Outlet />;
};

export default PrivateRoutes;
