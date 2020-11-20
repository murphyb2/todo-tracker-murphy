import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../../context/GlobalState";
import moment from "moment";

const TodoList = ({ todos, listGroup }) => {
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
                key={`${listGroup ? listGroup : ""}${item._id}${
                  item.completed ? "1" : "0"
                }`}
                variant={item.completed ? "success" : ""}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <FontAwesomeIcon
                    onClick={() => toggleCompleted(!item.completed, item._id)}
                    style={{
                      color: item.completed ? "green" : "red",
                    }}
                    size="lg"
                    icon={item.completed ? faCheckCircle : faExclamationCircle}
                  />
                  <div>
                    <p>{item.text}</p>
                  </div>
                  <div>
                    <p>Due: {moment(item.dueDate).format("MMM D, YYYY")}</p>
                  </div>
                  <Link
                    className="text-decoration-none float-right"
                    to={`/todos/${item._id}`}
                  >
                    Edit
                  </Link>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
    </>
  );
};

export default TodoList;
