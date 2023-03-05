import React, { useState } from "react";

const Input = ({ label, type, placeholder }) => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	// if (type === "text") {
	// 	return (
	// 		<div className="input-container">
	// 			{label && <label htmlFor={label}>{label}</label>}
	// 			<input type="text" value={inputValue} onChange={(e) => handleChange(e)} name={label} />
	// 		</div>
	// 	);
	// }
	// if (type === "time") {
	// 	return (
	// 		<div className="input-container">
	// 			{label && <label htmlFor={label}>{label}</label>}
	// 			<input type="time" value={inputValue} onChange={(e) => handleChange(e)} name={label} />
	// 		</div>
	// 	);
	// }

	return (
		<div className="input-container">
			{label && <label htmlFor={label}>{label}</label>}
			<input
				type={type}
				value={inputValue}
				name={label}
				placeholder={placeholder}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
};

export default Input;
