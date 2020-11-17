import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, getAuthState } = useContext(GlobalContext);
  console.log("isAuthenticated", isAuthenticated);

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};

export default PublicRoute;
