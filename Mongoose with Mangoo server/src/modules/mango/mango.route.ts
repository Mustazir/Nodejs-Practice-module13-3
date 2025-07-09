import { Router } from "express";
import { createMango, getAllMango } from "./mango.controller";



const mangoRoute =Router()

mangoRoute.post("/mango",createMango)
mangoRoute.get("/mango", getAllMango);

export default mangoRoute