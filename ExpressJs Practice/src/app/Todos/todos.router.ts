import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { client } from "../config/mongodb";
import { ObjectId } from "mongodb";



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

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id=req.params.id;
  const db = await client.db("todosDB-Express");
  const collection = await db.collection("todos");

  const todo= await collection.findOne({_id: new ObjectId(id)});
  

  res.json(todo);
});
todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id=req.params.id;
  const db = await client.db("todosDB-Express");
  const collection = await db.collection("todos");

await collection.deleteOne({_id:new ObjectId(id)})
  

  res.json({
    message: "Todo deleted successfully",
  });
});

todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  const { title, description, completed } = req.body;
  const id = req.params.id;
  const db = await client.db("todosDB-Express");
  const collection = await db.collection("todos");
  const filter = { _id: new ObjectId(id) };
  const updateTodo= await collection.updateOne(filter,{
    $set:{
      title,description,completed
    }
  },{upsert:true});


  res.json(updateTodo);
});

