import React, { useState } from "react";
import Clock from "../components/Clock";

const Exercise1 = () => {
	const [inputValue, setInputValue] = useState("");
	const [seconds, setSeconds] = useState({
		hours: 4,
		minutes: 34,
		seconds: 3,
	});

	const transformTime = (seconds) => {
		const hours = Math.trunc(seconds / 3600);
		const coef1 = seconds % 3600;
		const minutes = Math.trunc(coef1 / 60);
		const secondsTime = coef1 % 60;
		return {
			hours,
			minutes,
			seconds: secondsTime,
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSeconds(transformTime(e.target[0].value));
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
			<Clock time={seconds} />
		</div>
	);
};
//
export default Exercise1;
