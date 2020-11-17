import React from "react";
import Sidebar from "./Sidebar";
import AddTodo from "./AddTodo";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      Dashboard
      <AddTodo />
    </div>
  );
};

export default Dashboard;
