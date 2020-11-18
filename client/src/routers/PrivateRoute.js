import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Header from "../components/private/Header";
import { Layout } from "../components/private/layout";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, getAuthState } = useContext(GlobalContext);

  useEffect(() => {
    getAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Layout>
            <Header />
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
