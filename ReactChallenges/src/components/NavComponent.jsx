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
		<nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
			<div className="container-fluid">
				{/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
				<div className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<NavLink
							to="/home"
							className={(args) => ` ${args.isActive ? "active-link" : ""} nav-link my-items-nav`}>
							Home
						</NavLink>
					</li>

					<NavLink
						to="/about"
						className={(args) => ` ${args.isActive ? "active-link" : ""} nav-link my-items-nav`}>
						About
					</NavLink>
					<li className="nav-item">
						<NavLink
							to="/"
							onClick={() => logout()}
							className={(args) => ` ${args.isActive ? "active-link" : ""} nav-link my-items-nav`}>
							Logout
						</NavLink>
					</li>
				</div>
				{/* </div> */}
			</div>
		</nav>
	);
};

export default NavComponent;
