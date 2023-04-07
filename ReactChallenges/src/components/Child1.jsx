import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Child1 = () => {
	const { user } = useContext(UserContext);

	return (
		<div>
			<div>Child component 1</div>
			<pre>{JSON.stringify(user, null, 3)}</pre>
		</div>
	);
};

export default Child1;
