import React, { useState } from "react";

export const useForm = (initialState = {}) => {
	const [formState, setFormsState] = useState(initialState);

	const onInputChange = (env) => {
		const { name, value } = env.target;
		setFormsState({ ...formState, [name]: value });
	};
	const onResetForm = () => {
		setFormsState(initialState);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};
