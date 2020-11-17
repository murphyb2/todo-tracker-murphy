import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { GlobalContext } from "../../context/GlobalState";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      Dashboard
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default Dashboard;
