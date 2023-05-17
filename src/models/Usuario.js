import { Schema, model } from "mongoose";

const UsuarioSchema = Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
});

UsuarioSchema.virtual("tareas", {
	ref: "Task",
	localField: "_id",
	foreignField: "user",
	justOne: false,
});

const modelUser = model("Usuario", UsuarioSchema);

export default modelUser;
