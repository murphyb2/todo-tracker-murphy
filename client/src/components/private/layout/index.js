import React, { useState } from "react";
import { ToastMessages } from "../../ToastMessages";
import Sidebar from "./Sidebar";

export const Layout = ({ children }) => {
  const [toggled, setToggled] = useState(false);

  const handleSetToggled = (value) => setToggled(value);

  return (
    <>
      <ToastMessages
        style={{
          position: "relative",
          minHeight: "200px",
        }}
      />
      <div className="d-flex flex-row" style={{ height: "100vh" }}>
        <Sidebar toggled={toggled} handleSetToggled={handleSetToggled} />
        {React.Children.map(children, (child) => {
          // checking isValidElement is the safe way and avoids a typescript error too
          const props = { handleSetToggled };
          if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
          }
          return child;
        })}
      </div>
    </>
  );
};
