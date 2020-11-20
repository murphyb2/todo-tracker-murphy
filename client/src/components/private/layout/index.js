import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ToastMessages } from "../../ToastMessages";
import Sidebar from "./Sidebar";

export const Layout = ({ children }) => {
  const [toggled, setToggled] = useState(false);

  const handleSetToggled = (value) => setToggled(value);

  return (
    <>
      <div className="d-flex flex-row" style={{ height: "100vh" }}>
        <FontAwesomeIcon
          style={{
            position: "absolute",
            zIndex: 1,
            left: "0",
            top: "0",
          }}
          className="d-md-none pt-1 pl-1"
          size="2x"
          icon={faBars}
          onClick={() => handleSetToggled(true)}
        />
        <Sidebar toggled={toggled} handleSetToggled={handleSetToggled} />
        <div
          className="m-3 w-100 bg-transparent"
          style={{
            position: "relative",
            zIndex: 0,
          }}
        >
          {React.Children.map(children, (child) => {
            // checking isValidElement is the safe way and avoids a typescript error too
            const props = { handleSetToggled };
            if (React.isValidElement(child)) {
              return React.cloneElement(child, props);
            }
            return child;
          })}
        </div>
      </div>
      <ToastMessages
        style={{
          position: "relative",
          minHeight: "200px",
          zIndex: 1,
        }}
      />
    </>
  );
};
