import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import LoginPage from "../components/LoginPage";
import Dashboard from "../components/private/Dashboard";

const AppRouter = () => {
  console.log("app router rendering");
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact={true} component={LoginPage} />
        <PrivateRoute path="/dashboard" exact={true} component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
