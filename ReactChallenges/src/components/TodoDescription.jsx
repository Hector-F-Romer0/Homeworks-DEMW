import React from "react";

const TodoDescription = ({ todo }) => {
	return (
		<li className="list-group-item d-flex justify-content-between" key={todo.id}>
			<span className="align-self-center">{todo.description}</span>
			<button className="btn btn-danger">Borrar</button>
		</li>
	);
};

export default TodoDescription;
