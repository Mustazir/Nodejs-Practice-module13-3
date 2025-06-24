import express, { Application, NextFunction, Request, Response } from "express";
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

// error handling for routes
app.use((req :Request, res:Response) => {
  res.status(404).send("Route not found");
})

// error handling for server global error
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
  if(error){
    console.error("Error occurred:", error);
    res.status(400).json("Internal Server Error");
  }
})
export default app;
