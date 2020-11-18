import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export const LoginPage = () => {
  return (
    <Modal centered show>
      <Modal.Header>
        <Modal.Title className="text-center">Login</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center">
        <p>Login with Google to organize your life!</p>
        <Button variant="outline-primary" href="/auth/google">
          <div className="d-flex">
            <div className="pr-2">
              <FontAwesomeIcon icon={faGoogle} />
            </div>
            <div>Sign In with Google</div>
          </div>
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default LoginPage;
