import { ref, uploadBytesResumable, listAll } from "firebase/storage";

import { storage } from "./config";

export const upload = (file) => {
	if (!file) {
		alert("Please choose a file first!");
	}

	const storageRef = ref(storage, `/files/${file.name}`);
	const uploadTask = uploadBytesResumable(storageRef, file);
	return uploadTask;
};

export const getAll = () => {
	const listRef = ref(storage, "/files/");
	return listAll(listRef);
};
