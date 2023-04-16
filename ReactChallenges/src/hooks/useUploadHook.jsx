import { useState } from "react";

import { getAll, upload } from "../firebase/files";
import { deleteObject, getDownloadURL, getStorage, ref } from "firebase/storage";

export const useUploadHook = () => {
	const [files, setFiles] = useState([]);
	const [file, setFile] = useState("");
	const [percent, setPercent] = useState(0);

	const handleChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleUpload = () => {
		const uploadTask = upload(file);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
				setPercent(percent);
			},
			(err) => {
				console.log(err);
			},
			async () => {
				const url = await getDownloadURL(uploadTask.snapshot.ref);
				setFiles((list) => [...list, url]);
			}
		);
	};

	const handleGetAll = async () => {
		const { items } = await getAll();
		items.forEach(async (itemRef) => {
			const url = await getDownloadURL(itemRef);
			setFiles((list) => [...list, url]);
		});
	};

	const handleDeleteImage = async (item) => {
		try {
			const storage = getStorage();
			const desertRef = ref(storage, item);
			await deleteObject(desertRef);
			const filteredImages = files.filter((img) => img !== item);
			setFiles(filteredImages);
		} catch (error) {
			console.log(error);
		}
	};

	return { files, percent, handleChange, handleGetAll, handleUpload, handleDeleteImage };
};
