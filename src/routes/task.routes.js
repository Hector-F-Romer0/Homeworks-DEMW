import express from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-token.js";
import { actualizarTask, crearTask, eliminarTask, listarTasks } from "../controllers/task.controller.js";
const router = express.Router();

router.use(validarJWT);

router.get("/", listarTasks);
router.post("/", crearTask);
router.put(
	"/:id",
	[check("id", "El id no es válido y no puede ser vacío.").not().isEmpty().isMongoId(), validarCampos],
	actualizarTask
);
router.delete("/:id", eliminarTask);

export default router;
