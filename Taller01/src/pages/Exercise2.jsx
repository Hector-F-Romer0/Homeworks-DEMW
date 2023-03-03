import React, { useState } from "react";
import Input from "../components/Input";
import { isNumber } from "../helpers/typeValidators";

const Exercise2 = () => {
	const [CallPrice, setCallPrice] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		const minutes = isNumber(e.target[0].value);

		if (minutes === "No number") {
			alert("El valor ingresado no es numérico o está vacío");
			return;
		}

		if (minutes < 3) {
			console.log("Dura menos de 3 min");
			setCallPrice(100);
		} else {
			setCallPrice(100 + (minutes - 3) * 50);
		}
	};

	return (
		<div className="center-container">
			<h1>Exercise 02 - Call Price 📞</h1>
			<h3>Ingrese la duracción en minutos de su llamada. Se manejan las siguientes tarifas:</h3>
			<ul>
				<li>Menos de 3 min: $100</li>
				<li>Más de 3 min: $100 + $50 por cada minuto adicional</li>
			</ul>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<Input label="Minutos" />
				<button type="submit">Calcular</button>
			</form>
			<h3>Coste de la llamda: ${CallPrice}</h3>
		</div>
	);
};

export default Exercise2;
