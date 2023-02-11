import React, { useState } from "react";

const ComponentApp = () => {
	const [categories, setCategories] = useState(["First category", "Second category"]);
	const [category, setCategory] = useState("");
	return (
		<div className="center-container">
			<section>
				<h1>GifExpert 👽</h1>
				<h3>Type a category and press "Add category" to watch the magic ✨</h3>
				<div className="center-container">
					<input
						type="text"
						onChange={(e) => {
							const value = e.target.value;
							setCategory(value);
						}}
						value={category}
					/>
					<button
						className="my-button"
						onClick={() => {
							setCategories([...categories, category]);
							setCategory("");
						}}>
						Add category
					</button>
				</div>
				<hr />
			</section>
			<section>
				<h2>Your categories</h2>
				<ol>
					{categories.map((category, index) => {
						return <li key={index}>{category}</li>;
					})}
				</ol>
			</section>
		</div>
	);
};

export default ComponentApp;
