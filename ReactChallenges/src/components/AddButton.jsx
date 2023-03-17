import React from "react";

const AddButton = ({ onNewTodo }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const value = e.target[0].value;
		const newTodo = {
			id: new Date().getTime(),
			description: value,
			done: false,
		};
		onNewTodo(newTodo);
	};

	return (
		<>
			<h4>Agregar TODO</h4>
			<hr />
			<form onSubmit={(e) => handleSubmit(e)}>
				<input type="text" className="form-control" />
				<button className="btn btn-outline-primary mt-3" onSubmit={onNewTodo}>
					Agregar
				</button>
			</form>
		</>
	);
};

export default AddButton;
