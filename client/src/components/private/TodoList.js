import React from "react";
import { Todo } from "../Todo";

const TodoList = ({ todos }) => {
  console.log("todo list");
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
