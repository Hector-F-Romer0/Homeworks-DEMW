import React from "react";
import ReactDOM from "react-dom/client";
import ComponentApp from "./ComponentApp";
import FirstApp from "./FirstApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <FirstApp value={150} /> */}
		{/* Value será le valor por defecto del componente y al utilizar el botón de resetear, se inicializará al valor pasado como prop */}
		{/* <FirstApp value={4} /> */}
		<ComponentApp />
	</React.StrictMode>
);
