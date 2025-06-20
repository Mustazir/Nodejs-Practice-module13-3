import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";

const app: Application = express();
app.use(express.json());
const filepath = path.join(__dirname, "../../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("learning  World!");
});

app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, "utf-8");
  console.log(data);
  res.json(data);
 
});

app.post("/todos/create-todos", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("Todo created successfully!");
});


export default app;
