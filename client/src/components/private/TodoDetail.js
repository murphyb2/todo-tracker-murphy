import React, { useContext, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import DeleteTodo from "./DeleteTodo";

const TodoDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const { todos, deleteTodo } = useContext(GlobalContext);
  const todo = todos.find((todo) => todo._id === id);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleDelete = () => {
    deleteTodo(todo._id);
    history.push("/dashboard");
  };

  return (
    <Container className="h-100 w-100">
      <DeleteTodo
        show={showConfirmDelete}
        confirmDelete={handleDelete}
        handleCancel={() => setShowConfirmDelete(false)}
      />
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
      <Card className="shadow">
        <Card.Header>
          <h1>{todo.text}</h1>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              Date added: {moment(todo.createdAt).format("MMMM Do, YYYY")}
            </ListGroup.Item>
            <ListGroup.Item>
              Completed: {todo.completed ? "All done!" : "Nope!"}{" "}
              <FontAwesomeIcon
                icon={todo.completed ? faCalendarCheck : faExclamationCircle}
              />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="bg-secondary text-center">
          <Card.Title>Actions</Card.Title>
          <ButtonGroup>
            <Button>Edit</Button>
            <Button onClick={() => setShowConfirmDelete(true)} variant="danger">
              Delete
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default TodoDetail;
