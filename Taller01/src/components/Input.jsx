import React, { useState } from "react";

const Input = ({ label }) => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};
	return (
		<div className="input-container">
			{label && <label htmlFor={label}>{label}</label>}
			<input type="text" value={inputValue} onChange={(e) => handleChange(e)} name={label} />
		</div>
	);
};

export default Input;
