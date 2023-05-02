import express from "express";
import { crearUsuario, loginUsuario, revalidarToken } from "../controllers/auth.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
const router = express.Router();

router.get("/renew", revalidarToken);
router.post(
	"/",
	[
		check("email", "El email es obligatorio.").isEmail().not().isEmpty(),
		check("password", "La contraseña es obligatorio. Debe tener mínimo 6 caracteres").isLength({ min: 6 }),
		validarCampos,
	],
	loginUsuario
);
router.post(
	"/new",
	[
		check("name", "El nombre es obligatorio.").not().isEmpty(),
		check("email", "El email es obligatorio.").isEmail().not().isEmpty(),
		check("password", "La contraseña es obligatorio. Debe tener mínimo 6 caracteres").isLength({ min: 6 }),
		validarCampos,
	],
	crearUsuario
);

export default router;
