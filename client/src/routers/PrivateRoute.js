import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Header from "../components/private/Header";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, getAuthState } = useContext(GlobalContext);

  useEffect(() => {
    console.log("getting auth state");
    getAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
