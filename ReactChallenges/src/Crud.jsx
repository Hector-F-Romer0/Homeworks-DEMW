import React, { useEffect, useState } from "react";
import { useCollection } from "./firebase/firestore";

const Crud = () => {
	const [user, setUser] = useState({ name: "" });
	const { add, getAll, isPending, results, update, deleteItem } = useCollection("users");

	const getAllDocs = async () => {
		await getAll([]);
	};

	const save = async () => {
		await add(user);
		await getAllDocs();
	};

	const handleUpdate = async (id) => {
		await update(id);
		await getAllDocs();
	};

	const handleDelete = async (id) => {
		await deleteItem(id);
		await getAllDocs();
	};

	const handleSetUser = (event) => {
		setUser({ name: event.target.value });
	};

	useEffect(() => {
		getAllDocs();
	}, []);

	return (
		<>
			<h1>CHL17: CRUD con Firestore 🎛</h1>
			<br />
			<input type="text" onChange={handleSetUser} value={user.name} />
			<button type="button" onClick={save}>
				Guardar
			</button>
			{isPending ? <span>Saving...</span> : ""}
			<ul>
				{results.map((item) => {
					return (
						<div key={item.id}>
							<li>{JSON.stringify(item)}</li>
							<button onClick={() => handleUpdate(item)}>Update</button>
							<button onClick={() => handleDelete(item.id)}>Delete</button>
						</div>
					);
				})}
			</ul>
			<h4>HOL</h4>
		</>
	);
};

export default Crud;
