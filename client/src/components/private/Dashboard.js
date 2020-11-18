import React, { useContext, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { GlobalContext } from "../../context/GlobalState";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default Dashboard;
