const Todo = require("../models/Todo");
const TodoList = require("../models/TodoList");

// @desc    Get all todos
// @route   GET /api/v1/todos
// @access  Public
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({
      owner: req.user.id,
    });

    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add todo list
// @route   POST /api/v1/todos
// @access  Public
exports.addTodoList = async (req, res, next) => {
  try {
    const newTodoList = {
      ...req.body,
      owner: req.user.id,
    };

    const todoList = await TodoList.create(newTodoList);

    return res.status(201).json({
      success: true,
      msg: `Successfully created ${todoList.name}!`,
      data: todoList,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        msg: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        msg: ["Server Error"],
      });
    }
  }
};

// @desc    Add todo
// @route   POST /api/v1/todos
// @access  Public
exports.addTodo = async (req, res, next) => {
  try {
    console.log("addtodo body", req.body);
    const newTodo = {
      ...req.body,
      owner: req.user.id,
      completed: false,
      listGroup: req.body.list,
    };

    const todo = await Todo.create(newTodo);

    return res.status(201).json({
      success: true,
      msg: `Successfully added ToDo!`,
      data: todo,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        msg: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        msg: "Server Error",
      });
    }
  }
};

// @desc    Delete todo
// @route   DELETE /api/v1/todos/:id
// @access  Public
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        msg: "No todo found",
      });
    }

    await todo.remove();

    return res.status(200).json({
      success: true,
      msg: `Successfully deleted!`,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: "Server Error",
    });
  }
};

// @desc    Delete todo list
// @route   DELETE /api/v1/todos/list/:id
// @access  Public
exports.deleteTodoList = async (req, res, next) => {
  try {
    const todoList = await TodoList.findById(req.params.id);

    if (!todoList) {
      return res.status(404).json({
        success: false,
        msg: "Todo List not found",
      });
    }

    await todoList.remove();

    return res.status(200).json({
      success: true,
      msg: `Successfully deleted!`,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: "Server Error",
    });
  }
};
