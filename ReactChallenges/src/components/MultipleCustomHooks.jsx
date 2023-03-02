import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import Loading from "./Loading";

const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
	const { data, isLoading, hasError } = useFetch(url);

	useEffect(() => {
		console.log(data);
	}, [data]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="center-container">
			<h1>What say Albuquerque people? 🤔💎</h1>
			<h2>Number of quotes: {counter}</h2>
			<button className="my-button" onClick={increment}>
				Show more quotes
			</button>
			<div className="card-container">
				{data.map((quote, index) => (
					<blockquote key={index}>
						<p>{quote.quote}</p>
						<figcaption>{quote.author}</figcaption>
					</blockquote>
				))}
			</div>
		</div>
	);
};

export default MultipleCustomHooks;
