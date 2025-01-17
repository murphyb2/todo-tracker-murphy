import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import LoginPage from "../components/LoginPage";
import Dashboard from "../components/private/Dashboard";
import AddTodo from "../components/private/AddTodo";
import TodoLists from "../components/private/TodoLists";
import TodoDetail from "../components/private/TodoDetail";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact={true} component={LoginPage} />
        <PrivateRoute path="/dashboard" exact={true} component={Dashboard} />
        <PrivateRoute path="/add" component={AddTodo} />
        <PrivateRoute path="/todos/lists" exact={true} component={TodoLists} />
        <PrivateRoute path="/todos/:id" component={TodoDetail} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
