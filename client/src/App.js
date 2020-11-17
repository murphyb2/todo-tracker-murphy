import React from "react";
import { Header } from "./components/shared/Header";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";

import { GlobalProvider } from "./context/GlobalState";

import AppRouter from "./routers/AppRouter";

import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      {/* <Header />
      <div className="container">
        <TodoList />
        <AddTodo />
      </div> */}
      <AppRouter />
    </GlobalProvider>
  );
};

export default App;
