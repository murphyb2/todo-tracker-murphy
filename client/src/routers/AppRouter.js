import React, { useContext, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { GlobalContext } from "../context/GlobalState";

import LoginPage from "../components/LoginPage";
import Dashboard from "../components/private/Dashboard";

const AppRouter = () => {
  const { isAuthenticated, getAuthState } = useContext(GlobalContext);
  console.log("isAuthenticated", isAuthenticated);

  useEffect(() => {
    getAuthState();
  }, []);
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/dashboard" exact={true} component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
