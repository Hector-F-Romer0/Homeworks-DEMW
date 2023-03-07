import React, { useState } from "react";
import Input from "../components/Input";

import { isNumber } from "../helpers/typeValidators";

const Exercise6 = () => {
	const [oddNumbers, setOddNumbers] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		const lowerLimit = isNumber(e.target[0].value);
		const upperLimit = isNumber(e.target[1].value);
		if (lowerLimit === "" || upperLimit === "") {
			alert("Escriba en todos los campos disponibles");
			return;
		}

		if (lowerLimit > upperLimit) {
			console.log("Límites incorrectos");
			alert("El límite inferior no puede ser mayor o igual al límite superior.");
			return;
		}

		let arrayNumbers = [];

		for (let index = upperLimit; index > lowerLimit; index--) {
			if (index % 2 !== 0) {
				arrayNumbers.push(index);
			}
		}

		setOddNumbers(arrayNumbers);
		// console.log(lowerLimit);
	};

	return (
		<div className="center-container">
			<h1>Exercise 06 - Odd numbers 1️⃣3️⃣5️⃣</h1>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<Input type="number" label="Lower limit" />
				<Input type="number" label="Insert a number" />
				<button>Check odd numbers</button>
			</form>
			<div className="center-container">
				<p>
					{oddNumbers.length === 0 ? (
						<span>No existen valores impares en el rango 🥴</span>
					) : (
						oddNumbers.map((num, index) => <span key={index}>{num}, </span>)
					)}
				</p>
			</div>
		</div>
	);
};

export default Exercise6;
