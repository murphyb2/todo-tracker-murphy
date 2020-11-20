import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import TodoList from "./TodoList";

const Dashboard = () => {
  const { todos, profile } = useContext(GlobalContext);
  const unfinishedTodos = todos.filter((todo) => todo.completed !== true);
  return (
    <div className="w-100 pt-3 bg-todo-primary">
      <Col>
        <h1 className="todo-title">Welcome {profile.firstName}</h1>
        <h3>Your week at a glance...</h3>
        <div className="d-flex flex-column flex-md-row">
          <Col>
            <Card className="shadow">
              <Card.Header>
                <h5>Due Today</h5>
              </Card.Header>
              <Card.Body className="todo-card-body">
                {!unfinishedTodos.length && <h6>You're all caught up!</h6>}
                <TodoList todos={unfinishedTodos} />
              </Card.Body>
            </Card>
          </Col>
          <Col className="h-100">
            <div className="h-100 d-flex flex-column justify-content-around">
              <Card className="shadow">
                <Card.Header>
                  <h5>Upcoming</h5>
                </Card.Header>
                <Card.Body className="todo-card-body">Body</Card.Body>
              </Card>
              <Card className="shadow">
                <Card.Header>
                  <h5>Yet to Complete</h5>
                </Card.Header>
                <Card.Body className="todo-card-body">Body</Card.Body>
              </Card>
            </div>
          </Col>
        </div>
      </Col>
    </div>
  );
};

export default Dashboard;
