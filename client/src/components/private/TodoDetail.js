import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import DatePicker from "react-date-picker";

import DeleteTodo from "./DeleteTodo";

const TodoDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const { todos, deleteTodo } = useContext(GlobalContext);
  const todo = todos.find((todo) => todo._id === id);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [editDetailview, setEditDetailView] = useState(false);

  const [text, setText] = useState(todo.text);
  const [listGroup, setList] = useState(todo.listGroup);
  const [dueDate, setDate] = useState(todo.dueDate);
  const [completed, setCompleted] = useState(todo.completed);
  const [validated, setValidated] = useState(null);

  const { editTodo, todoLists } = useContext(GlobalContext);

  const handleDelete = () => {
    deleteTodo(todo._id);
    history.push("/dashboard");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const updates = {
        text,
        listGroup,
        dueDate,
        completed,
      };
      editTodo(updates, todo._id);
      setValidated(false);
    }
  };

  const editViewContent = (
    <Form
      noValidate
      validated={validated}
      className="mx-auto"
      onSubmit={onSubmit}
    >
      <Form.Group controlId="todoText">
        <Form.Label>Todo Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a todo name..."
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
          value={listGroup}
        >
          <option value={""}>Select a list...</option>
          {todoLists.map((list) => (
            <option key={list._id} value={list._id}>
              {list.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Row>
        <Col>
          <Form.Label>Set Due Date</Form.Label>
          <div>
            <DatePicker onChange={setDate} value={dueDate} />
          </div>
        </Col>
        <Col>
          <Form.Check
            onChange={(e) => setCompleted(e.target.checked)}
            checked={completed}
            label="Completed?"
          />
        </Col>
      </Form.Row>
      <Button className="mt-3 mx-auto" onClick={onSubmit}>
        Save Changes
      </Button>
    </Form>
  );
  const detailViewContent = (
    <ListGroup>
      <ListGroup.Item>
        <strong>Completed: </strong>
        {todo.completed ? "All done!" : "Nope!"}{" "}
        <FontAwesomeIcon
          icon={todo.completed ? faCalendarCheck : faExclamationCircle}
        />
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Due Date: </strong>
        {moment(todo.dueDate).format("MMMM Do, YYYY")}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Date added: </strong>
        {moment(todo.createdAt).format("MMMM Do, YYYY")}
      </ListGroup.Item>
    </ListGroup>
  );
  return (
    <Container className="h-100 w-100 pt-3">
      {!!!todo && (
        <h5 className="text-center mt-3">Hmm.. can't find that todo</h5>
      )}
      {!!todo && (
        <>
          <DeleteTodo
            show={showConfirmDelete}
            confirmDelete={handleDelete}
            handleCancel={() => setShowConfirmDelete(false)}
          />
          <Card className="shadow mt-3">
            <Card.Header>
              <h1>{todo.text}</h1>
            </Card.Header>
            <Card.Body>
              {editDetailview ? editViewContent : detailViewContent}
            </Card.Body>
            <Card.Footer className="bg-secondary text-center">
              <Card.Title>Actions</Card.Title>
              <ButtonGroup className="mx-auto">
                {!editDetailview && (
                  <Button onClick={() => setEditDetailView(!editDetailview)}>
                    Edit
                  </Button>
                )}

                {editDetailview && (
                  <Button
                    onClick={() => setEditDetailView(false)}
                    variant="info"
                  >
                    Cancel
                  </Button>
                )}
                <Button
                  onClick={() => setShowConfirmDelete(true)}
                  variant="danger"
                >
                  Delete
                </Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>
        </>
      )}
    </Container>
  );
};

export default TodoDetail;
