const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  listGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TodoList",
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
