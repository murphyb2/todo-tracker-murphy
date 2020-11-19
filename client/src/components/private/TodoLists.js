import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const TodoLists = () => {
  const [name, setName] = useState("");
  const { todoLists, addTodoList, deleteTodoList } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = {
      name,
    };
    addTodoList(newTodoList);
  };
  const handleDeleteList = (id) => {
    deleteTodoList(id);
  };

  return (
    <Container className="h-100 w-100">
      <h1 className="mt-3">ToDo Lists</h1>
      {!todoLists && (
        <h4 className="text-center mt-3">You haven't created any lists yet!</h4>
      )}
      {!!todoLists && (
        <>
          <ListGroup>
            {todoLists.map((list) => (
              <ListGroup.Item
                className="d-flex justify-content-between align-items-center"
                key={list._id}
              >
                <div className="flex-fill">{list.name}</div>
                <div className="mr-1">
                  {moment(list.createdAt).format("MMM D, YYYY")}
                </div>
                <div>
                  <Button onClick={() => handleDeleteList(list._id)}>
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
      <Form inline onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="todoText">
          <Form.Row>
            <Form.Control
              type="text"
              className="m-1"
              placeholder="Enter a new List name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button className="m-1" type="submit">
              <FontAwesomeIcon icon={faPlus} />
              Add List
            </Button>
          </Form.Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TodoLists;
