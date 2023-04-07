import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Child2 = () => {
	const { setUser } = useContext(UserContext);

	const onLogin = () => {
		setUser({
			id: 313,
			name: "Jonathan Lopez",
			email: "jlopez0313@hotmail.com",
		});
	};
	return (
		<>
			<div>Child2</div>
			<button className="btn btn-primary" onClick={() => onLogin()}>
				Set user info
			</button>
		</>
	);
};

export default Child2;
