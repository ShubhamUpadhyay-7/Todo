const express = require("express");
const Router = express.Router();
const todoController = require("../controller/todoController");
const authenticate = require("../middleware/authMiddleware");

Router.use(authenticate);

Router.get("/", todoController.getAllTodos);

Router.post("/create", todoController.createTodo);

Router.put("/update/:id", todoController.updateTodo);

Router.delete("/delete/:id", todoController.deleteTodo);

module.exports = Router;
