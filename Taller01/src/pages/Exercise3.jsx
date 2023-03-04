import React, { useState } from "react";
import Input from "../components/Input";

const Exercise3 = () => {
	const [infoGreeting, setInfoGreeting] = useState({ name: null, greeting: null, emoji: null });

	const doGreeting = (name, time) => {
		// const hour = time.split(":")[0];
		let [hour] = time.split(":");
		let emoji;
		let dayTime;
		if (hour >= 0 && hour < 11) {
			dayTime = "Buenos días";
			emoji = "🌞";
		} else if (hour >= 12 && hour < 19) {
			dayTime = "Buenas tardes";
			emoji = "🌆";
		} else {
			dayTime = "Buenas noches";
			emoji = "🌚";
		}

		setInfoGreeting({ name, greeting: dayTime, emoji });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target[0].value;
		const time = e.target[1].value;

		if (name === "" || time === "") {
			alert("Escriba en todos los campos disponibles");
			return;
		}

		doGreeting(name, time);
	};

	return (
		<div className="center-container">
			<h1>Exercise 03 - Greetings 👋</h1>

			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<Input type="text" label="Nombre" />
				<Input type="time" />
				<button type="submit">Salúdame 😀</button>
			</form>
			{infoGreeting.name !== null && (
				<h2>{`${infoGreeting.greeting} ${infoGreeting.name} ${infoGreeting.emoji}`}</h2>
			)}
		</div>
	);
};

export default Exercise3;
