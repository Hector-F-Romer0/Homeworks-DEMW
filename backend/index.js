import express from "express";
import * as dotenv from "dotenv";
import { dbConnection } from "./src/database/config.js";

import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();
dbConnection();

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => console.log("Hello world 😼"));
