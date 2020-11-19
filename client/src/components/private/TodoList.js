import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Todo } from "../Todo";
import { GlobalContext } from "../../context/GlobalState";

const TodoList = ({ handleSetToggled }) => {
  const { todos } = useContext(GlobalContext);

  return (
    <div className="h-100 w-100">
      <FontAwesomeIcon
        className="d-md-none"
        icon={faBars}
        onClick={() => handleSetToggled(true)}
      />
      <h3>Everything</h3>
      <ul className="list">
        {todos && todos.map((todo) => <Todo key={todo._id} todo={todo} />)}
      </ul>
    </div>
  );
};

export default TodoList;
