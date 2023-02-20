import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const ComponentApp = () => {
	const [categories, setCategories] = useState([]);

	const onAddCategory = (category) => {
		setCategories([...categories, category]);
	};

	return (
		<div className="center-container">
			<section>
				<h1>GifExpert 👽</h1>
				<h3>Type a word and press "Enter" to watch the magic below ✨</h3>
				<div className="center-container">
					<AddCategory onAddCategory={onAddCategory}></AddCategory>
				</div>
				<hr />
			</section>
			<section>
				<h2>Your categories</h2>
				<div className="card-container">
					{categories.map((category, index) => {
						return <GifGrid key={index} category={category}></GifGrid>;
					})}
				</div>
			</section>
		</div>
	);
};

export default ComponentApp;
