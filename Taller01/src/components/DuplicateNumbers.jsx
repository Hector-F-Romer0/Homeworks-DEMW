import React from "react";

const DuplicateNumbers = ({ numbers }) => {
	const countDuplicates = () => {
		let duplicateNumber = 0;
		if (numbers.firstValue === numbers.secondValue) {
			duplicateNumber += 1;
		}
		if (numbers.firstValue === numbers.thirdValue) {
			duplicateNumber += 1;
		}
		if (numbers.secondValue === numbers.thirdValue) {
			duplicateNumber += 1;
		}

		return duplicateNumber;
	};

	return (
		<div>
			<h2>Los números se han repetido {countDuplicates()} veces 🤔</h2>
		</div>
	);
};

export default DuplicateNumbers;
