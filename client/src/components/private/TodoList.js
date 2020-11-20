import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../../context/GlobalState";

const TodoList = ({ todos }) => {
  const { editTodo } = useContext(GlobalContext);
  const toggleCompleted = (completed, id) => {
    editTodo({ completed }, id);
  };
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
                  onClick={() => toggleCompleted(!item.completed, item._id)}
                  style={{
                    color: item.completed ? "green" : "red",
                  }}
                  className="mr-2"
                  icon={item.completed ? faCheckCircle : faExclamationCircle}
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
