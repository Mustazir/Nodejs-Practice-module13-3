import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
import { title } from "process";
import { Note } from "../models/note.model";
import { noteRoutes } from "../controler/note.controler";

const app: Application = express();

app.use(express.json()); //to parse json data from request body


app.use("/notes",noteRoutes) // /notes is the rote then redirect to noteRoutes folder


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Note App!");
});

export default app;
