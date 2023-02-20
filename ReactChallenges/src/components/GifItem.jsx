import React from "react";

const GifItem = ({ gifInfo }) => {
	// console.log(gifInfo);
	return (
		<div className="card">
			<h4>{gifInfo.title}</h4>
			<img src={gifInfo.url} alt="" />
		</div>
	);
};

export default GifItem;
