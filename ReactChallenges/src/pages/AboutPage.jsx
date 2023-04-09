import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AboutPage = () => {
	const { user } = useContext(UserContext);

	return (
		<>
			<h1>About 🔎</h1>
			<br />
			<h2>¿Qué deseas buscar {user?.username}? 🐱‍🐉</h2>
		</>
	);
};

export default AboutPage;
