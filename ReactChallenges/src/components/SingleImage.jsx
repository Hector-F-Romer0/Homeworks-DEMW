import React from "react";

const SingleImage = ({ item, handleDeleteImage }) => {
	return (
		<div>
			<img width={"500px"} src={item}></img>
			<button onClick={() => handleDeleteImage(item)}>Delete this</button>
		</div>
	);
};

export default SingleImage;
