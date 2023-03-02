import React from "react";

const Loading = () => {
	return (
		<div className="center-container">
			<h1>Cargando...</h1>
			<div className="newtons-cradle">
				<div className="newtons-cradle__dot"></div>
				<div className="newtons-cradle__dot"></div>
				<div className="newtons-cradle__dot"></div>
				<div className="newtons-cradle__dot"></div>
			</div>
		</div>
	);
};

export default Loading;
