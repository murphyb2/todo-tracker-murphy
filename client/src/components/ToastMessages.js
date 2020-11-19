import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faTimes } from "@fortawesome/free-solid-svg-icons";

import Toast from "react-bootstrap/Toast";
import Fade from "react-bootstrap/Fade";

export const ToastMessages = () => {
  const { messages, clearMessage } = useContext(GlobalContext);

  const handleToastClose = (id) => {
    clearMessage(id);
  };

  return (
    <div>
      <div style={{ position: "absolute", top: 0, right: 0, zindex: 1 }}>
        {messages.map((msg) => (
          <Toast
            key={msg.id}
            style={{
              background: msg.success ? "seagreen" : "red",
              width: "33vw",
            }}
            className="mt-2 mr-2"
            onClose={() => handleToastClose(msg.id)}
            show={true}
            delay={5000}
            autohide
            animation
            transition={Fade}
          >
            <Toast.Body className="d-flex flex-nowrap">
              <FontAwesomeIcon
                className="mr-1 text-light"
                icon={msg.success ? faCheckDouble : faTimes}
              />
              <div className="text-light">{msg.message}</div>
            </Toast.Body>
          </Toast>
        ))}
      </div>
    </div>
  );
};
