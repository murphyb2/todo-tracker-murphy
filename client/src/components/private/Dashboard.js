import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Dashboard = ({ handleSetToggled }) => {
  return (
    <div>
      <FontAwesomeIcon
        className="d-md-none"
        icon={faBars}
        onClick={() => handleSetToggled(true)}
      />
      Dashboard
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default Dashboard;
