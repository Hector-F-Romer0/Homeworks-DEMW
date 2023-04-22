import React from "react";

const UserAuthInfo = ({ data }) => {
	return (
		<>
			<h2>Información de sesión 🤠</h2>

			<h3>Name: {data?.displayName}</h3>
			<h4>Email: {data?.email}</h4>
			<h5>Uid: {data?.uid}</h5>
			<h5>Status: {data?.status}</h5>
		</>
	);
};

export default UserAuthInfo;
