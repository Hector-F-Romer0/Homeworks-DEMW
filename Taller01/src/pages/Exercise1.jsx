import React, { useState } from "react";
import Clock from "../components/Clock";

const Exercise1 = () => {
	const [inputValue, setInputValue] = useState("");
	const [seconds, setSeconds] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		const currentValue = e.target[0].value;
		const intCurrentValue = Number(currentValue);
		if (isNaN(intCurrentValue)) {
			alert("El valor ingresado debe ser numérico.");
			setInputValue("");
			return;
		}
		setSeconds(intCurrentValue);
		setInputValue("");
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className="center-container">
			<h1>Exercise 01 -clock 🕒</h1>
			<h3>Inserta los segundos que desas convertir a formato Horas:minutos:segundos</h3>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<input type="text" value={inputValue} onChange={(e) => handleChange(e)} />
			</form>
			<Clock seconds={seconds} />
		</div>
	);
};
//
export default Exercise1;
