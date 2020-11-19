const mongoose = require("mongoose");
const Todo = require("./Todo");

const TodoListSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a Name"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

// Delete todos when list is removed
TodoListSchema.pre("remove", async function (next) {
  const list = this;

  await Todo.deleteMany({ listGroup: list._id });

  next();
});

module.exports = mongoose.model("TodoList", TodoListSchema);
