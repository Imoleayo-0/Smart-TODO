import express from "express";
import ServerlessHttp from "serverless-http";
import { connectToDb } from "./Config/connectToDb.js";
import todoRouter from "./routers/todo.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*"
}));
// const port = 4000;
connectToDb();

// app.listen(port, () => {
//   console.log(`App currently running at port:${port}`);
// });

app.get("/", (req, res) => {
  res.send("Hello at todo app!!, and of course API is working...");
});
app.use("/api/todo", todoRouter);

export default ServerlessHttp(app)