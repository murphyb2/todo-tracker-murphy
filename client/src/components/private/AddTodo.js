import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const AddTodo = () => {
  const [text, setText] = useState("");

  const { addTodo } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      text,
    };

    addTodo(newTodo);
  };

  return (
    <div className="h-100 w-100">
      <Container className="mt-3">
        <Form className="mx-auto" onSubmit={onSubmit}>
          <h4>Add new todo</h4>
          <Form.Group controlId="todoText">
            <Form.Label>New ToDo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a new ToDo..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>

          <Button type="submit">Add todo</Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddTodo;
