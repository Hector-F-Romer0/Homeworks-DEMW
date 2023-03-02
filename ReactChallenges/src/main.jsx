import React from "react";
import ReactDOM from "react-dom/client";
import ComponentApp from "./ComponentApp";
import Clock from "./components/Clock";
import MultipleCustomHooks from "./components/MultipleCustomHooks";
import FirstApp from "./FirstApp";
import "./index.css";
import Exercise1 from "./pages/Exercise1";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		{/* <FirstApp value={150} /> */}
		{/* Value será le valor por defecto del componente y al utilizar el botón de resetear, se inicializará al valor pasado como prop */}
		{/* <FirstApp value={4} /> */}
		{/* <ComponentApp /> */}
		{/* <MultipleCustomHooks /> */}

		{/* Componentes Taller 01 */}
		<Exercise1 />
	</>
);
