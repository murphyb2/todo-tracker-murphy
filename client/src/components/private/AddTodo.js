import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const AddTodo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState("");
  const [validated, setValidated] = useState(null);

  const { addTodo, todoLists } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const newTodo = {
        text,
        list,
      };
      addTodo(newTodo);
      setValidated(false);
    }
  };

  return (
    <div className="w-100">
      <Container className="mt-3">
        <Form
          noValidate
          validated={validated}
          className="mx-auto"
          onSubmit={onSubmit}
        >
          <h1>Create New ToDo</h1>
          <Form.Group controlId="todoText">
            <Form.Label>New ToDo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a new ToDo..."
              value={text}
              required
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Assign to a list</Form.Label>
            <Form.Control
              required
              as="select"
              onChange={(e) => setList(e.target.value)}
            >
              <option value={""}>Select a list...</option>
              {todoLists.map((list) => (
                <option key={list._id} value={list._id}>
                  {list.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {!todoLists.length && (
            <>
              <h3>You must create a list before you can add a ToDo!</h3>
              <Link to="/todos/lists">
                <Button variant="info">Add a new list...</Button>
              </Link>
            </>
          )}
          {!!todoLists.length && <Button type="submit">Add todo</Button>}
        </Form>
      </Container>
    </div>
  );
};

export default AddTodo;
