"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const filepath = path_1.default.join(__dirname, "../../../db/todo.json");
// todos router creation
exports.todosRouter = express_1.default.Router();
// using the todos router for getting all todos
exports.todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filepath, "utf-8");
    console.log(req.query);
    console.log("Fetching all todos from router");
    res.json(data);
});
exports.todosRouter.post("/create-todos", (req, res) => {
    const { title, body } = req.body;
    res.send("Todo created successfully!");
});
