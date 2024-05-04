const Todo = require("../models/todo");

exports.getAllTodos = async (req, res) => {
  const userId = req.userId;
  try {
    const userTodos = await Todo.findAll({ where: { userId } });
    res.json(userTodos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createTodo = async (req, res) => {
  const { name, date, description } = req.body;
  const userId = req.userId;
  try {
    const todo = await Todo.create({ name, date, description, userId });
    res.status(201).json({ message: "Todo Created Successfully", todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { name, date, description } = req.body;
  const userId = req.userId;
  try {
    const todo = await Todo.findOne({ where: { id, userId } });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    await todo.update({ name, date, description });
    res.status(200).json({ message: "Todo Updated Successfully", todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  try {
    const todo = await Todo.findOne({ where: { id, userId } });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    await todo.destroy();
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
