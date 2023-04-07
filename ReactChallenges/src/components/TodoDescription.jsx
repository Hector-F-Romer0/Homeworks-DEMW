import React from "react";

const TodoDescription = ({ todo, onDeleteTodo, onToggleTodo }) => {
	console.log(todo.done);
	return (
		<li className="list-group-item d-flex justify-content-between" key={todo.id}>
			<span
				onClick={() => onToggleTodo(todo.id)}
				className={`align-self-center ${todo.done ? "text-decoration-line-through" : ""}`}>
				{todo.description}
			</span>
			<button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
				Borrar
			</button>
		</li>
	);
};

export default TodoDescription;
