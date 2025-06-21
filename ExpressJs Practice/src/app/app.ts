import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";
import { todosRouter } from "./Todos/todos.router";

const app: Application = express();
app.use(express.json());
const filepath = path.join(__dirname, "../../db/todo.json");

// middle wire for Routing
app.use("/todos", todosRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("learning  World!");
});

export default app;
