import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import TodoList from "./TodoList";

const Dashboard = ({ handleSetToggled }) => {
  const { todos, profile } = useContext(GlobalContext);
  const unfinishedTodos = todos.filter((todo) => todo.completed !== true);
  return (
    <div className="w-100 p-3 bg-todo-primary">
      <FontAwesomeIcon
        className="d-md-none"
        icon={faBars}
        onClick={() => handleSetToggled(true)}
      />
      <Col>
        <h1 className="todo-title">Welcome {profile.firstName}</h1>
        <h3>Your week at a glance...</h3>
        <Row>
          <Col>
            <Card className="shadow">
              <Card.Header bsPrefix="todo-card-header">
                <h5>Due Today</h5>
              </Card.Header>
              <Card.Body bsPrefix="todo-card-body">
                <TodoList todos={unfinishedTodos} />
              </Card.Body>
            </Card>
          </Col>
          <Col className="h-100">
            <div className="h-100 d-flex flex-column justify-content-around">
              <Card className="shadow">
                <Card.Header bsPrefix="todo-card-header">
                  <h5>Upcoming</h5>
                </Card.Header>
                <Card.Body bsPrefix="todo-card-body">Body</Card.Body>
              </Card>
              <Card className="shadow">
                <Card.Header bsPrefix="todo-card-header">
                  <h5>Yet to Complete</h5>
                </Card.Header>
                <Card.Body bsPrefix="todo-card-body">Body</Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Dashboard;
