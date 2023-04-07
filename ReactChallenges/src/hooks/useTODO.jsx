import { useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
import * as types from "../components/types";

const initialState = [
	{
		id: new Date().getTime(),
		description: "Hacer los challenges",
		done: false,
	},
];

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTODO = () => {
	const [todos, dispatchTodo] = useReducer(TodoReducer, initialState, init);

	const handleNewTodo = (todo) => {
		const action = {
			type: types.CREATE_TODO,
			payload: todo,
		};
		dispatchTodo(action);
	};

	const onDeleteTodo = (idToDO) => {
		const action = {
			type: types.DELETE_TODO,
			payload: idToDO,
		};
		dispatchTodo(action);
	};

	const onToggleTodo = (idToDO) => {
		const action = {
			type: types.TOGGLE_TODO,
			payload: idToDO,
		};
		dispatchTodo(action);
	};

	const countTodos = () => {
		const allTodos = todos.length;
		return allTodos;
	};

	const countPendingTodos = () => {
		const pendingTodos = todos.filter((todo) => todo.done === false);
		return pendingTodos.length;
	};

	return { todos, handleNewTodo, onDeleteTodo, onToggleTodo, countTodos, countPendingTodos };
};
