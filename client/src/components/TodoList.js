import React, { useContext, useEffect } from "react";
import { Todo } from "./Todo";

import { GlobalContext } from "../context/GlobalState";

export const TodoList = () => {
  const { todos, getTodos } = useContext(GlobalContext);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
