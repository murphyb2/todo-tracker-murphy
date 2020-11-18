import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

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
