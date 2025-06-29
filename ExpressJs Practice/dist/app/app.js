"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todos_router_1 = require("./Todos/todos.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filepath = path_1.default.join(__dirname, "../../db/todo.json");
// middle wire for Routing
app.use("/todos", todos_router_1.todosRouter);
app.get("/", (req, res) => {
    res.send("learning  World!");
});
// error handling for routes
app.use((req, res) => {
    res.status(404).send("Route not found");
});
// error handling for server global error
app.use((error, req, res, next) => {
    if (error) {
        console.error("Error occurred:", error);
        res.status(400).json("Internal Server Error");
    }
});
exports.default = app;
