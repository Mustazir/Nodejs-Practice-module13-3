import express, { Request, Response } from 'express';
import path from 'path';
import fs  from 'fs';


const filepath = path.join(__dirname, "../../../db/todo.json");


// todos router creation
export const todosRouter = express.Router();


// using the todos router for getting all todos
todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, "utf-8");
  console.log(req.query)
  console.log("Fetching all todos from router");
  res.json(data);
 
});


todosRouter.post("/create-todos", (req: Request, res: Response) => {
  
  const { title, body } = req.body;
  
  res.send("Todo created successfully!");
});