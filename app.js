import express from "express";
import { connectToDb } from "./Config/connectToDb.js"
import todoRouter from "./routers/todo.js";

const app = express();
app.use(express.json());
const port = 4000;
-
app.listen(port, () => {
  console.log(`App currently running at port:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello at todo app!!");
});
connectToDb();

app.use("/api/todo", todoRouter);
