import React from "react";
import PropTypes from "prop-types";

const Clock = ({ time }) => {
	return (
		<>
			<h3>
				<span>{time.hours}</span>:<span>{time.minutes}</span>:<span>{time.seconds}</span>
			</h3>
		</>
	);
};

Clock.propTypes = {
	time: PropTypes.object.isRequired,
};

Clock.defaultProps = {
	time: {
		hours: 2,
		minutes: 24,
		seconds: 34,
	},
};

export default Clock;
