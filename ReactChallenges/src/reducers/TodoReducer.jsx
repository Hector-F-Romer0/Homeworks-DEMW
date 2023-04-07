export const TodoReducer = (initialState = [], action) => {
	switch (action.type) {
		case "ABC":
			throw new Error("Action not yet implemented");
			break;
		case "[TODO] ADD TODO":
			return [...initialState, action.payload];
		case "[TODO] DELETE TODO":
			const filterToDo = initialState.filter((todo) => todo.id !== action.payload);
			return filterToDo;
		case "[TODO] TOGGLE TODO":
			const updateTodo = initialState.map((todo) => {
				if (todo.id === action.payload) {
					todo.done = !todo.done;
				}
				return todo;
			});
			return updateTodo;
		default:
			return initialState;
	}
};
