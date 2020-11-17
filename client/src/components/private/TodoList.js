import React, { useContext, useEffect } from "react";
import { Todo } from "../Todo";
import { GlobalContext } from "../../context/GlobalState";

const TodoList = () => {
  const { todos } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {todos && todos.map((todo) => <Todo key={todo._id} todo={todo} />)}
      </ul>
    </>
  );
};

export default TodoList;
