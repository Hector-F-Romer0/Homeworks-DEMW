import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import OneDimensionTable from "../components/OneDimensionTable";
import { isNumber } from "../helpers/typeValidators";

const Exercise8 = () => {
	const [randomNumbers, setRandomNumbers] = useState([]);
	const [dividedNumbers, setDividedNumbers] = useState([]);

	const tableHeader = ["P0", "P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"];

	useEffect(() => {
		const randomValues = [];
		for (let index = 0; index < 10; index++) {
			const value = Math.floor(Math.random() * 100);
			randomValues.push(value);
		}

		setRandomNumbers(randomValues);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const index = randomNumbers[isNumber(e.target[0].value)];

		if (index === undefined) {
			alert("Debe escoger un valor del 0 al 9 que corresponden a los índices del arreglo mostrado en pantalla.");
			return;
		}

		if (index === 0) {
			alert("El valor escogido es 0. La división entre 0 es indeterminado.");
			return;
		}

		const newArray = [];

		for (const iterator of randomNumbers) {
			let value = (iterator / index).toFixed(2);
			newArray.push(value);
		}

		setDividedNumbers(newArray);
	};

	return (
		<div className="center-container">
			<h1>Exercise 08 - Array division ➗</h1>
			<h2>Existen los siguientes 10 valores:</h2>
			<OneDimensionTable data={randomNumbers} header={tableHeader} />
			<h4>Escoja una posición del arreglo anterior para dividir estos valores por el número escogido (0 a 9)</h4>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<Input type="number" label="Ingrese la posición del valor deseado" />
			</form>
			{dividedNumbers.length !== 0 && (
				<>
					<h3>Se han dividido los valores entre el valor digitado 🤯</h3>
					<OneDimensionTable data={dividedNumbers} header={tableHeader} />
				</>
			)}
		</div>
	);
};

export default Exercise8;
