import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const MultipleCustomHooks = () => {
	const url = "https://api.breakingbadquotes.xyz/v1/quotes/1";

	const { data, isLoading, hasError } = useFetch(url);

	useEffect(() => {
		console.log(data);
	}, [data]);

	if (isLoading) {
		return <h1>Cargando...</h1>;
	}
	return <div>MultipleCustomHooks</div>;
};

export default MultipleCustomHooks;
