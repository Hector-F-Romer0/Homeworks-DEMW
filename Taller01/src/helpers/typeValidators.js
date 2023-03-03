const isNumber = (value) => {
	if (value === "") {
		return "No number";
	}

	const intValue = Number(value);
	if (!isNaN(intValue)) {
		return intValue;
	}
	return "No number";
};

export { isNumber };
