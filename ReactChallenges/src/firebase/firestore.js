import { db } from "./config";
import { collection, addDoc, query, where, getDocs, orderBy, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";

export const useCollection = (table) => {
	const [results, setResults] = useState([]);
	const [error, setError] = useState([]);
	const [isPending, setIsPending] = useState(false);

	const getAll = async (condition = "") => {
		setResults([]);
		let resDoc = null,
			q = null;

		if (condition && condition.length === 3) {
			q = query(collection(db, table), where(condition[0], condition[1], condition[2]));
		} else {
			q = query(collection(db, table));
		}
		resDoc = await getDocs(q);

		resDoc.forEach((doc) => {
			setResults((list) => [...list, { ...doc.data(), id: doc.id }]);
		});
	};

	const add = async (doc) => {
		setError(null);
		setIsPending(true);

		try {
			let resDoc = await addDoc(collection(db, table), doc);
			console.log("Document ID: " + resDoc.id);
			setIsPending(false);
			return resDoc;
		} catch (err) {
			console.log(err.message);
			setError("Could not send the message.");
			setIsPending(false);
			return null;
		}
	};

	const update = async (data) => {
		try {
			setError(null);
			setIsPending(true);
			await updateDoc(doc(db, table, data.id), {
				name: `${data.name} Updated`,
			});
			setIsPending(false);
		} catch (err) {
			console.log(err.message);
			setError("Could not edit the message.");
			setIsPending(false);
			return null;
		}
	};

	const deleteItem = async (id) => {
		try {
			await deleteDoc(doc(db, table, id));
			setIsPending(false);
		} catch (err) {
			console.log(err.message);
			setError("Could not delete the message.");
			setIsPending(false);
			return null;
		}
	};

	return { error, isPending, results, getAll, add, update, deleteItem };
};
