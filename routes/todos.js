const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  deleteTodo,
  addTodoList,
  deleteTodoList,
} = require("../controllers/todos");
const { ensureAuth } = require("../middleware/auth");

router.route("/").get(ensureAuth, getTodos).post(addTodo);
router.route("/list").get(ensureAuth, getTodos).post(addTodoList);

router.route("/:id").delete(deleteTodo);
router.route("/list/:id").delete(deleteTodoList);

module.exports = router;
