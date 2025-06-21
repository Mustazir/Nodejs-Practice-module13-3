import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";

const app: Application = express();
app.use(express.json());
const filepath = path.join(__dirname, "../../db/todo.json");

// todos router creation
const todosRouter = express.Router();
// middle wire for Routing
app.use('/todos', todosRouter);

// using the todos router for getting all todos
todosRouter.get("/alltodos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, "utf-8");
  console.log(req.query)
  console.log("Fetching all todos from router");
  res.json(data);
 
});

app.get("/", (req: Request, res: Response) => {
  res.send("learning  World!");
});


// without using the router for getting all todos
app.get("/todos/alltodos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, "utf-8");
  console.log(req.query)
  console.log("Fetching all todos froom not router");
  res.json(data);
 
});

app.post("/todos/create-todos", (req: Request, res: Response) => {
  
  const { title, body } = req.body;
  
  res.send("Todo created successfully!");
});


export default app;
