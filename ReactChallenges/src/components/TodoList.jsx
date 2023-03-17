import React from "react";
import TodoDescription from "./TodoDescription";

const TodoList = ({ todos }) => {
	return (
		<>
			<h4>To Do list 👻</h4>
			<ul className="list-group">
				{todos.map((todo) => (
					<TodoDescription todo={todo} key={todo.id} />
				))}
			</ul>
		</>
	);
};

export default TodoList;
