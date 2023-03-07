import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import SalariesTable from "../components/SalariesTable";
import { isNumber } from "../helpers/typeValidators";

const Exercise7 = () => {
	const [salaries, setSalaries] = useState([]);
	const [visibleTable, setVisibleTable] = useState(false);

	useEffect(() => {
		if (salaries.length === 11) {
			const copySalaries = [...salaries];
			copySalaries.shift();
			setSalaries(copySalaries);
		}
	}, [salaries]);

	const mostarSalarios = () => {
		setVisibleTable(true);
	};

	const showTable = () => {
		if (!visibleTable) {
			return;
		}
		if (visibleTable && salaries.length === 10) {
			return <SalariesTable data={salaries} />;
		} else {
			return <h3>ERROR: se necesitan 10 salarios para mostrar la tabla</h3>;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const salary = isNumber(e.target[0].value);

		if (salary === "No number" || salary === "") {
			alert("Ingrese un valor númerico en el campo");
			return;
		}
		console.log(salaries.length);
		setSalaries([...salaries, salary]);
	};

	return (
		<div className="center-container">
			<h1>Exercise 07 - Salaries 💰</h1>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<Input type="text" label="Insert a salary" />
			</form>
			<button onClick={mostarSalarios}>Calcular aumento</button>
			{showTable()}
		</div>
	);
};

export default Exercise7;
