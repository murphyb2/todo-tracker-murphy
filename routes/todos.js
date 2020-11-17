const express = require("express");
const router = express.Router();
const { getTodos, addTodo, deleteTodo } = require("../controllers/todos");
const { ensureAuth } = require("../middleware/auth");

router.route("/").get(ensureAuth, getTodos).post(addTodo);

router.route("/:id").delete(deleteTodo);

module.exports = router;
