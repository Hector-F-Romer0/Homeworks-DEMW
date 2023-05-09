import mongoose from "mongoose";

export const dbConnection = async () => {
	try {
		mongoose.connect(process.env.DB_CONNECTION, {
			autoIndex: true,
		});
		console.log("Conectado a la BD 😎");
	} catch (error) {
		console.log(error);
		throw new Error("Error al conectorse a Mongo Atlas.");
	}
};
