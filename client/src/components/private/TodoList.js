import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

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
                <FontAwesomeIcon
                  style={{
                    color: item.completed ? "green" : "red",
                  }}
                  className="mr-2"
                  icon={item.completed ? faCalendarCheck : faExclamationCircle}
                />{" "}
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
