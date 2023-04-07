import React from "react";

import AddButton from "./AddButton";
import TodoList from "./TodoList";
import { useTODO } from "../hooks/useTODO";

const TodoApp = () => {
	const { todos, handleNewTodo, onDeleteTodo, onToggleTodo, countTodos, countPendingTodos } = useTODO();

	return (
		<div className="ms-5 me-5 pt-5">
			<h1>
				⚓ TodoApp: {countTodos()}, <small>Pendientes: {countPendingTodos()}</small>
			</h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList todos={todos} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
				</div>
				<div className="col-5">
					<AddButton onNewTodo={handleNewTodo} />
				</div>
			</div>
		</div>
	);
};

export default TodoApp;
