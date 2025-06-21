"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filepath = path_1.default.join(__dirname, "../../db/todo.json");
// todos router creation
const todosRouter = express_1.default.Router();
// middle wire for Routing
app.use('/todos', todosRouter);
// using the todos router for getting all todos
todosRouter.get("/alltodos", (req, res) => {
    const data = fs_1.default.readFileSync(filepath, "utf-8");
    console.log(req.query);
    console.log("Fetching all todos from router");
    res.json(data);
});
app.get("/", (req, res) => {
    res.send("learning  World!");
});
// without using the router for getting all todos
app.get("/todos/alltodos", (req, res) => {
    const data = fs_1.default.readFileSync(filepath, "utf-8");
    console.log(req.query);
    console.log("Fetching all todos froom not router");
    res.json(data);
});
app.post("/todos/create-todos", (req, res) => {
    const { title, body } = req.body;
    res.send("Todo created successfully!");
});
exports.default = app;
