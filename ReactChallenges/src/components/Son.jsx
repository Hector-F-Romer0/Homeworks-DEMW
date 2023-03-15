import React, { memo } from "react";

const Son = memo(({ numero, increment }) => {
	console.log("Again reloaded...");
	return (
		<button
			onClick={() => {
				increment(numero);
			}}>
			{numero}
		</button>
	);
});

export default Son;
