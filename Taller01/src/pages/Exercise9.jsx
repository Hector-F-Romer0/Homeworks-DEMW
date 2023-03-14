import React, { useState } from "react";
import GeneratedTable from "../components/GeneratedTable";
import Input from "../components/Input";
import { isNumber } from "../helpers/typeValidators";

const Exercise9 = () => {
	const [tableSize, setTableSize] = useState({
		columns: 0,
		rows: 0,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const rowsInput = isNumber(e.target[0].value);
		const columnsInput = isNumber(e.target[1].value);

		if (rowsInput === "No number" || columnsInput === "No number") {
			alert("Ingrese un valor númerico en el campo");
			return;
		}
		setTableSize({
			columns: columnsInput,
			rows: rowsInput,
		});
	};
	return (
		<div className="center-container">
			<h1>Exercise 09 - Create table 🌀</h1>
			<h3>A continuación, podrás dibujar una tabla con base en los siguientes valores</h3>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<Input type="number" label="Número de filas (N)"></Input>
				<Input type="number" label="Número de columnas (M)"></Input>
				<button type="submit">Crear tabla</button>
			</form>
			<GeneratedTable tableSize={tableSize} />
		</div>
	);
};

export default Exercise9;
