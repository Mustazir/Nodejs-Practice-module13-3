"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("../config/mongodb");
const filepath = path_1.default.join(__dirname, "../../../db/todo.json");
// todos router creation
exports.todosRouter = express_1.default.Router();
// using the todos router for getting all todos
exports.todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_1.client.db("todosDB-Express");
    const collection = yield db.collection("todos");
    const todos = yield collection.find().toArray();
    res.json(todos);
}));
exports.todosRouter.post("/create-todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, completed } = req.body;
    const db = yield mongodb_1.client.db("todosDB-Express");
    const collection = yield db.collection("todos");
    yield collection.insertOne({
        title: title,
        description: description,
        completed: completed,
    });
    const todos = yield collection.find().toArray();
    res.json(todos);
}));
