import express from "express";
import modelTask from "../models/TaskScheme.js";

const listarTasks = async (req, res = express.response) => {
	const tasks = await modelTask.find().populate("user", "name");
	try {
		return res.status(200).json({
			ok: true,
			tasks,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Error interno",
		});
	}
};

const crearTask = async (req, res = express.response) => {
	const { title } = req.body;
	const task = new modelTask({ title });
	try {
		task.user = req.uid;
		const saved = await task.save();
		res.status(201).json({
			ok: true,
			msg: saved,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			task: "Internal error",
		});
	}
};

const actualizarTask = async (req, res = express.response) => {
	try {
		const { id } = req.params;
		const task = await modelTask.findById(id).populate("user", "_id");

		if (!task) {
			return res.status(404).json({
				ok: false,
				msg: `No existe una tarea con el id ${id}`,
			});
		}

		// Validar que el id del JWT sea el mismo que el id del creador de la tarea
		if (task.user.id !== req.uid) {
			return res.status(403).json({
				ok: false,
				msg: `No tienes permiso para ver esta tarea.`,
			});
		}

		const { title } = req.body;
		const newTask = await modelTask.findByIdAndUpdate(id, { title }, { new: true });

		return res.status(200).json({
			ok: true,
			newTask,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			task: "Internal error",
		});
	}
};

const eliminarTask = async (req, res = express.response) => {
	try {
		const { id } = req.params;
		const task = await modelTask.findById(id).populate("user", "_id");

		if (!task) {
			return res.status(404).json({
				ok: false,
				msg: `No existe una tarea con el id ${id}`,
			});
		}

		await modelTask.findByIdAndDelete(id);

		res.status(204).json({
			ok: true,
			msg: "Task eliminado",
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			task: "Internal error",
		});
	}
};

export { crearTask, listarTasks, actualizarTask, eliminarTask };
