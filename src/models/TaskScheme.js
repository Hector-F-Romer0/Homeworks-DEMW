import { Schema, model } from "mongoose";

const TaskSchema = Schema(
	{
		title: {
			type: String,
			require: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "Usuario",
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
		toObject: {
			virtuals: true,
		},
	}
);

TaskSchema.method("toJSON", function () {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});

const modelTask = model("Task", TaskSchema);

export default modelTask;
