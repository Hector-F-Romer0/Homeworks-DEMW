import React, { useEffect } from "react";
import { useUploadHook } from "../hooks/useUploadHook";
import SingleImage from "./SingleImage";

const Upload = () => {
	const { files, percent, handleChange, handleUpload, handleGetAll, handleDeleteImage } = useUploadHook();

	useEffect(() => {
		handleGetAll();
	}, []);
	return (
		<div>
			<input type="file" onChange={handleChange} accept="" />
			<button onClick={() => handleUpload()}>Upload to Firebase</button>
			<p>{percent} "% done"</p>
			{files.map((item, key) => {
				return <SingleImage key={key} item={item} handleDeleteImage={handleDeleteImage} />;
			})}
		</div>
	);
};

export default Upload;
