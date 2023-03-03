import React from "react";
import PropTypes from "prop-types";

const Clock = ({ seconds }) => {
	const transformTime = () => {
		let hours = Math.trunc(seconds / 3600);
		const coef1 = seconds % 3600;
		let minutes = Math.trunc(coef1 / 60);
		let secondsTime = coef1 % 60;

		if (hours < 10) {
			hours = `0${hours}`;
		}

		if (minutes < 10) {
			minutes = `0${minutes}`;
		}

		if (secondsTime < 10) {
			secondsTime = `0${secondsTime}`;
		}
		return (
			<h1>
				<span>{hours}</span>:<span>{minutes}</span>:<span>{secondsTime}</span>
			</h1>
		);
	};

	return <>{transformTime(seconds)}</>;
};

Clock.propTypes = {
	seconds: PropTypes.number.isRequired,
};

Clock.defaultProps = {
	seconds: 100,
};

export default Clock;
