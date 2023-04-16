import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import ComponentApp from "./ComponentApp";
import Father from "./components/Father";
import MultipleCustomHooks from "./components/MultipleCustomHooks";
import TodoApp from "./components/TodoApp";
import FirstApp from "./FirstApp";
import "./index.css";
import Parent from "./components/Parent";
import MainApp from "./pages/MainApp";
import App from "./components/App";

import { store } from "./store/store";
import Registro from "./Registro";
import LogIn from "./LogIn";
import NavComponent from "./components/NavComponent";
import HomePage from "./pages/HomePage";
import HomeFirebase from "./pages/HomeFirebase";
import UploadsFirebase from "./pages/UploadsFirebase";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			{/* <FirstApp value={150} /> */}
			{/* Value será le valor por defecto del componente y al utilizar el botón de resetear, se inicializará al valor pasado como prop */}
			{/* <FirstApp value={4} /> */}
			{/* <ComponentApp /> */}
			{/* <MultipleCustomHooks /> */}
			{/* <Father /> */}
			{/* <TodoApp /> */}
			{/* <Parent/> */}
			{/* <MainApp /> */}
			{/* <App /> */}
			{/* <NavLink to={"/"}>Register</NavLink>
			<br />
			<NavLink to={"/login"}>Log in</NavLink>
			<Routes>
				<Route index element={<Registro />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/home" element={<HomeFirebase />}></Route>
			</Routes> */}
			<UploadsFirebase />
		</BrowserRouter>
	</Provider>
);
