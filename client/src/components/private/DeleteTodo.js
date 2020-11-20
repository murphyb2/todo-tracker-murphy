import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const DeleteTodo = ({ show, handleCancel, confirmDelete }) => {
  return (
    <Modal show={show} onHide={handleCancel}>
      <Modal.Header>Are you sure you want to delete this todo?</Modal.Header>
      <Modal.Body>
        <ButtonGroup className="mx-auto">
          <Button variant="danger" onClick={confirmDelete}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteTodo;
