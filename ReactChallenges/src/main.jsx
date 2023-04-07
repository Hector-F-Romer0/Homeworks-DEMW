import React from "react";
import ReactDOM from "react-dom/client";
import ComponentApp from "./ComponentApp";
import Father from "./components/Father";
import MultipleCustomHooks from "./components/MultipleCustomHooks";
import TodoApp from "./components/TodoApp";
import FirstApp from "./FirstApp";
import "./index.css";
import Parent from "./components/Parent";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./pages/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		{/* <FirstApp value={150} /> */}
		{/* Value será le valor por defecto del componente y al utilizar el botón de resetear, se inicializará al valor pasado como prop */}
		{/* <FirstApp value={4} /> */}
		{/* <ComponentApp /> */}
		{/* <MultipleCustomHooks /> */}
		{/* <Father /> */}
		{/* <TodoApp /> */}
		{/* <Parent/> */}
		<MainApp />
	</BrowserRouter>
);
