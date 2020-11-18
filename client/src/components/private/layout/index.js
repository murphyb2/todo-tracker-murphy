import React from "react";
import Sidebar from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-row" style={{ height: "100vh" }}>
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};
