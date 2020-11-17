import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { GlobalContext } from "../../context/GlobalState";

const Dashboard = () => {
  const { todos, getTodos } = useContext(GlobalContext);
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Sidebar />
      Dashboard
      <TodoList todos={todos} />
      <AddTodo />
    </div>
  );
};

export default Dashboard;
