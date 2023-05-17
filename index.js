import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { dbConnection } from "./src/database/config.js";

import authRoutes from "./src/routes/auth.routes.js";
import taskRoutes from "./src/routes/task.routes.js";

dotenv.config();
dbConnection();

const app = express();
app.use(cors());

app.use(express.static("public"));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);

app.listen(process.env.PORT, () => console.log("Hello world 😼"));
