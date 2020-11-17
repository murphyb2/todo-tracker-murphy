import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext);

  const sign = todo.amount < 0 ? "-" : "+";

  return (
    <li>
      {todo.text}{" "}
      <button onClick={() => deleteTodo(todo._id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
