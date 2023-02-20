import React, { useState } from "react";

const AddCategory = ({ onAddCategory }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const onSubit = (e) => {
		e.preventDefault();
		onAddCategory(inputValue);
		setInputValue("");
	};

	return (
		<form onSubmit={(e) => onSubit(e)}>
			<input type="text" placeholder="Type here!" value={inputValue} onChange={(e) => onInputChange(e)} />
		</form>
	);
};

export default AddCategory;
