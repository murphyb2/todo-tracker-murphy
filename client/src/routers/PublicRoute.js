import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, getAuthState } = useContext(GlobalContext);

  useEffect(() => {
    getAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};

export default PublicRoute;
