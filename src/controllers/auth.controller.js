import express from "express";
import bcrypt from "bcrypt";

import modelUser from "../models/Usuario.js";
import { generarJWT } from "../helpers/jwt.js";
import { model } from "mongoose";

const crearUsuario = async (req, res = express.response) => {
	const { name, email, password } = req.body;

	try {
		let usuario = await modelUser.findOne({ email });

		if (usuario) {
			res.status(400).json({
				ok: false,
				msg: "El usuario con este correo ya existe.",
			});
		}
		const salt = bcrypt.genSaltSync();
		const encryptedPassword = bcrypt.hashSync(password, salt);

		usuario = new modelUser({ name, email, password: encryptedPassword });
		await usuario.save();
		res.status(200).json({
			ok: true,
			usuario,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: false,
		});
	}
};

const loginUsuario = async (req, res = express.response) => {
	try {
		const { email, password } = req.body;
		let usuario = await modelUser.findOne({ email });

		if (!usuario) {
			return res.status(400).json({
				ok: false,
				msg: "El usuario no existe en la base de datos.",
			});
		}

		const passwordValid = bcrypt.compareSync(password, usuario.password);
		if (!passwordValid) {
			return res.status(400).json({
				ok: false,
				msg: "La contraseña no es correcta.",
			});
		}

		const token = await generarJWT(usuario.id, usuario.name);

		res.json({
			ok: true,
			usuario,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			error,
		});
	}
};

const revalidarToken = async (req, res = express.response) => {
	const { uid, name } = req;
	const token = await generarJWT(uid, name);

	res.json({
		ok: true,
		token,
	});
};

const listarTareas = async (req, res = express.response) => {
	try {
		const tareas = await modelUser.find().populate("tareas", "title");
		return res.status(200).json({
			ok: true,
			tareas,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: "Error interno",
		});
	}
};

export { loginUsuario, crearUsuario, revalidarToken, listarTareas };
