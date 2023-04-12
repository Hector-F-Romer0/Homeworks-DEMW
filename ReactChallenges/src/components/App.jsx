import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy } from "../store/slices/counterSlice";

const App = () => {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const incrementValue = 5;

	return (
		<>
			<h1>App</h1>
			<hr />
			<span>Counter is: {counter}</span>
			<hr />
			<button className="btn btn-primary" onClick={() => dispatch(increment())}>
				+1
			</button>
			<br />
			<button className="btn btn-primary" onClick={() => dispatch(decrement())}>
				-1
			</button>
			<br />
			<button className="btn btn-primary" onClick={() => dispatch(incrementBy(incrementValue))}>
				+{incrementValue}
			</button>
		</>
	);
};

export default App;
