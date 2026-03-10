import express from "express";
import { createTask, getTask } from "../Controllers/todo.js";
import { deleteTask, updateTask } from "../Controllers/todo.js";
const todoRouter = express.Router();

todoRouter.post("/create", createTask);
todoRouter.patch("/update/:id", updateTask);
todoRouter.delete("/delete/:id", deleteTask);
todoRouter.get("/", getTask);

export default todoRouter;
