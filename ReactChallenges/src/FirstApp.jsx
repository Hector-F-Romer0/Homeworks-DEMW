import React from "react";
import PropTypes from "prop-types";

import "./index.css";
import { useCounter } from "./hooks/useCounter";

const FirstApp = ({ value }) => {
	const { counter, increment, decrement, reset } = useCounter(value);

	return (
		<div className="my-container">
			<h1 className="main-title">Has recolectado {counter} piñas 🍍</h1>
			{value > 0 ? <h1 className="main-title">😀</h1> : <h1 className="main-title">😥</h1>}
			<button className="my-button" onClick={increment}>
				Sumar
			</button>
			<button className="my-button" onClick={decrement}>
				Restar
			</button>
			<button className="my-button" onClick={reset}>
				Resetear
			</button>
		</div>
	);
};

FirstApp.propTypes = {
	value: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
	value: 0,
};

export default FirstApp;
