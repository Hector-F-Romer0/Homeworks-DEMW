import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavComponent = () => {
	return (
		<nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
			<div class="container-fluid">
				{/* <a class="navbar-brand" href="#">
					Navbar
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button> */}

				{/* <NavLink to="/" className={(args) => `${args.isActive ? "active" : ""}`}>
					Home
				</NavLink> */}

				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<NavLink
							to="/"
							className={(args) => ` ${args.isActive ? "active-link" : ""} nav-link my-items-nav`}>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className={(args) => ` ${args.isActive ? "active-link" : ""} nav-link my-items-nav`}>
							About
						</NavLink>
						<NavLink
							to="/login"
							className={(args) => ` ${args.isActive ? "active-link" : ""} nav-link my-items-nav`}>
							Login
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavComponent;
