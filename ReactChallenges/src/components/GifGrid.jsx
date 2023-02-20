import React, { useEffect, useState } from "react";
import GifItem from "./GifItem";

const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=DAcCRmTof3jUUsU5zjCXHYyzedLwxXgg&q=${category}&limit=25&offset=0&rating=g&lang=en`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		};
	});

	return gifs;
};

const GifGrid = ({ category }) => {
	const [listImages, setListImages] = useState([]);

	const callAPI = async () => {
		const res = await getGifs(category);
		setListImages(res);
	};

	useEffect(() => {
		callAPI();
	}, [category]);

	return (
		<>
			{listImages.map((gif) => (
				<GifItem gifInfo={gif} key={gif.id}></GifItem>
			))}
		</>
	);
};

export default GifGrid;
