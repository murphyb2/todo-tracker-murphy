import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext);

  return (
    <li>
      {todo.text}{" "}
      <button onClick={() => deleteTodo(todo._id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
