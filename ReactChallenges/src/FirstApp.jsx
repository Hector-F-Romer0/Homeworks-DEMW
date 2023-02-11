import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.css";

const FirstApp = ({ value }) => {
	const [counter, setCounter] = useState(value);
	const handleAdd = () => {
		setCounter(counter + 1);
	};

	const handleSubstract = () => {
		setCounter(counter - 1);
	};

	const handleReset = () => {
		setCounter(value);
	};

	return (
		<div className="my-container">
			<h1>My first App in Desarrollo de Experiencias Multimedia para la Web 🥶</h1>
			<span>10</span>
			<h1 className="main-title">Has recolectado {counter} piñas 🍍</h1>
			{counter > 0 ? <h1 className="main-title">😀</h1> : <h1 className="main-title">😥</h1>}
			<button className="my-button" onClick={handleAdd}>
				Presioname
			</button>
			<button className="my-button" onClick={handleSubstract}>
				Restar
			</button>
			<button className="my-button" onClick={handleReset}>
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
