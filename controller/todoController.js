const Todo = require("../models/todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createTodo = async (req, res) => {
  const { Name, Date, Description } = req.body;
  console.log(Name);
  try {
    const todo = await Todo.create({ Name, Date, Description });
    res.status(201).json({ message: "Todo Created Successfully", todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { Name, Date, Description } = req.body;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    await todo.update({ Name, Date, Description });
    res.status(200).json({ message: "Todo Updated Successfully", todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
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
