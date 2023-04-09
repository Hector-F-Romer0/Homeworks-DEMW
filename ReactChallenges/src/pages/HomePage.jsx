import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const HomePage = () => {
	const { user } = useContext(UserContext);
	console.log(user);

	return (
		<div>
			<h1>Welcome to Home Page</h1>
			<br />
			<h2>
				Hello <span>{user?.username}</span> 🐱‍👤
			</h2>
		</div>
	);
};

export default HomePage;
