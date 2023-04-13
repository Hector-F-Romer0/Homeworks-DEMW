import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const NavComponent = () => {
	const { user, setUser } = useContext(UserContext);

	const logout = () => {
		console.log("Log out...");
		setUser({ username: "", password: "" });
	};

	return (
		<nav>
			<div>
				<li>
					<NavLink
						to="/home"
						className={(args) => ` ${args.isActive ? "active-link" : ""} nav-link my-items-nav`}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={(args) => ` ${args.isActive ? "active-link" : ""} nav-link my-items-nav`}>
						About
					</NavLink>
				</li>
			</div>

			<li>
				<NavLink
					to="/"
					onClick={() => logout()}
					className={(args) => ` ${args.isActive ? "active-link" : ""} nav-link my-items-nav`}>
					Logout
				</NavLink>
			</li>
		</nav>
	);
};

export default NavComponent;
