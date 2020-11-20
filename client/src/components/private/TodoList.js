import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const TodoList = ({ todos }) => {
  return (
    <>
      {!todos.length && (
        <h6>
          No todos in this list! Add one <Link to="/add">here!</Link>
        </h6>
      )}
      {todos.length > 0 && (
        <ListGroup>
          {!!todos.length &&
            todos.map((item) => (
              <ListGroup.Item
                key={item._id}
                variant={item.completed ? "success" : ""}
              >
                {item.text}
                <Link
                  className="text-decoration-none float-right"
                  to={`/todos/${item._id}`}
                >
                  Edit
                </Link>
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
    </>
  );
};

export default TodoList;
