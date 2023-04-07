import React from "react";
import TodoDescription from "./TodoDescription";

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
	return (
		<>
			<h4>To Do list 👻</h4>
			<ul className="list-group">
				{todos.map((todo) => (
					<TodoDescription
						todo={todo}
						key={todo.id}
						onDeleteTodo={onDeleteTodo}
						onToggleTodo={onToggleTodo}
					/>
				))}
			</ul>
		</>
	);
};

export default TodoList;
