import React, { useState } from "react";
import { useRef } from "react";
import Input from "../components/Input";
import { isNumber } from "../helpers/typeValidators";

const Exercise5 = () => {
	const [orderedNumbers, setOrderedNumbers] = useState([]);
	const numberInput = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		const number = isNumber(e.target[0].value);
		if (number === "No number" || number === "") {
			alert("Escriba en todos los campos disponibles");
			return;
		}
		const numbersArray = [...orderedNumbers];
		numbersArray.push(number);
		numbersArray.sort((a, b) => {
			return a - b;
		});
		setOrderedNumbers(numbersArray);
	};

	return (
		<div className="center-container">
			<h1>Exercise 5 - Ordered numbers 🔂</h1>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<Input type="number" label="Insert a number" />
				<button type="submit">Add</button>
			</form>
			<ul>
				{orderedNumbers.map((number, index) => (
					<li key={index}>{number}</li>
				))}
			</ul>
		</div>
	);
};

export default Exercise5;
