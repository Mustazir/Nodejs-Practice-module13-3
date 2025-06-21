import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { client } from "../config/mongodb";

const filepath = path.join(__dirname, "../../../db/todo.json");

// todos router creation
export const todosRouter = express.Router();

// using the todos router for getting all todos
todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB-Express");
  const collection = await db.collection("todos");

  const todos = await collection.find().toArray();

  res.json(todos);
});

todosRouter.post("/create-todos", async (req: Request, res: Response) => {
  const { title, description, completed } = req.body;
  const db = await client.db("todosDB-Express");
  const collection = await db.collection("todos");
  await collection.insertOne({
    title: title,
    description: description,
    completed: completed,
  });
  const todos = await collection.find().toArray();

  res.json(todos);
});
