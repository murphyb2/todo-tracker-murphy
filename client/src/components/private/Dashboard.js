import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Dashboard = ({ handleSetToggled }) => {
  return (
    <div className="h-100 w-100">
      <FontAwesomeIcon
        className="d-md-none"
        icon={faBars}
        onClick={() => handleSetToggled(true)}
      />
      <h3>Dasboard</h3>
    </div>
  );
};

export default Dashboard;
