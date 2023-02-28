import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
	const [listImages, setListImages] = useState([]);

	const url = `https://api.giphy.com/v1/gifs/search?api_key=DAcCRmTof3jUUsU5zjCXHYyzedLwxXgg&q=${category}&limit=25&offset=0&rating=g&lang=en`;
	const { data, isLoading, hasError } = useFetch(url);

	const getGifs = () => {
		// Obtenemos la data en forma bruta
		console.log(data);
		// const gifData = console.log(gifData);
		// Se necesita limpiar la data
		const gifs =
			data?.data?.map((img) => {
				return {
					id: img.id,
					title: img.title,
					url: img.images.downsized_medium.url,
				};
			}) || [];

		setListImages(gifs);
	};

	useEffect(() => {
		getGifs();
	}, [data]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			{listImages.map((gif) => (
				<GifItem gifInfo={gif} key={gif.id}></GifItem>
			))}
		</>
	);
};

export default GifGrid;
