import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Header = () => {
  const { getTodos, isAuthenticated } = useContext(GlobalContext);
  useEffect(() => {
    // console.log("isAuth", isAuthenticated);
    // console.log(todos);
    // if (isAuthenticated) getTodos();
  }, []);

  return (
    <>
      <div>Welcome</div>
      <a href="/auth/logout">Logout</a>
    </>
  );
};

export default Header;
