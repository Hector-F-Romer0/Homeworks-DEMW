import express from "express";
import bcrypt from "bcrypt";

import modelUser from "../models/Usuario.js";

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

	res.json({
		ok: true,
		usuario,
	});
};

const revalidarToken = (req, res = express.response) => {
	res.json({
		ok: true,
	});
};

export { loginUsuario, crearUsuario, revalidarToken };
