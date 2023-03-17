import React from "react";
import { useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
import AddButton from "./AddButton";
import TodoList from "./TodoList";

const initialState = [
	{
		id: new Date().getTime(),
		description: "Hacer los challenges",
		done: false,
	},
];

const TodoApp = () => {
	const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

	const handleNewTodo = (todo) => {
		const action = {
			type: "[TODO] ADD TODO",
			payload: todo,
		};
		dispatchTodo(action);
	};

	return (
		<div className="ms-5 me-5 pt-5">
			<h1>
				⚓ TodoApp: 10, <small>Pendientes:2</small>
			</h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList todos={todos} />
				</div>
				<div className="col-5">
					<AddButton onNewTodo={handleNewTodo} />
				</div>
			</div>
		</div>
	);
};

export default TodoApp;
