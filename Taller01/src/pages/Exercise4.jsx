import React, { useState } from "react";
import DuplicateNumbers from "../components/DuplicateNumbers";
import Input from "../components/Input";

const Exercise4 = () => {
	const [duplicateNumbers, setDuplicateNumbers] = useState({
		firstValue: 3,
		secondValue: 7,
		thirdValue: 19,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const firstValue = e.target[0].value;
		const secondValue = e.target[1].value;
		const thirdValue = e.target[2].value;

		if (firstValue === "" || secondValue === "" || thirdValue === "") {
			alert("Escriba en todos los campos disponibles");
			return;
		}

		setDuplicateNumbers({ firstValue, secondValue, thirdValue });
	};
	return (
		<div className="center-container">
			<h1>Exercise 04 - repeated numbers 🔢</h1>
			<form action="" onSubmit={handleSubmit}>
				<Input type="number" placeholder={duplicateNumbers.firstValue} label="Primer número" />
				<Input type="number" placeholder={duplicateNumbers.secondValue} label="Segundo número" />
				<Input type="number" placeholder={duplicateNumbers.thirdValue} label="Tercer número" />
				<button>Comprobar</button>
			</form>
			<DuplicateNumbers numbers={duplicateNumbers} />
		</div>
	);
};

export default Exercise4;
