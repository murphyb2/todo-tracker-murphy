import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import moment from "moment";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import TodoList from "./TodoList";

const Dashboard = () => {
  const { todos, todoLists, profile } = useContext(GlobalContext);
  const unfinishedTodos = todos.filter(
    (todo) => !todo.completed && moment(todo.dueDate).diff(moment(), "days") < 1
  );

  return (
    <div className="w-100 pt-3 bg-todo-primary">
      <Col>
        <h1 className="todo-title">Welcome {profile.firstName}</h1>
        <div className="d-flex flex-column flex-md-row">
          <Col>
            <h3>Your week at a glance...</h3>
            <Card className="shadow mb-3">
              <Card.Header>
                <h5>Due Today</h5>
              </Card.Header>
              <Card.Body className="todo-card-body">
                {unfinishedTodos.length < 1 && <h6>You're all caught up!</h6>}
                {unfinishedTodos.length > 0 && (
                  <TodoList
                    todos={todos.filter(
                      (todo) =>
                        !todo.completed &&
                        moment(todo.dueDate).diff(moment(), "days") < 1
                    )}
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col className="h-100">
            <h3>Your Lists</h3>
            <div className="h-100 d-flex flex-column justify-content-around">
              {todoLists.length < 1 && (
                <Card className="shadow">
                  <Card.Header>You haven't created and lists!</Card.Header>
                  <Card.Body className="todo-card-body">
                    Go create one <Link to="/todos/lists">here!</Link>
                  </Card.Body>
                </Card>
              )}
              {todoLists.length > 0 &&
                todoLists.map((list) => (
                  <Card key={list._id} className="shadow mb-2">
                    <Card.Header>{list.name}</Card.Header>
                    <Card.Body className="todo-card-body">
                      {
                        <TodoList
                          listGroup={list._id}
                          todos={todos.filter(
                            (todo) =>
                              todo.listGroup && todo.listGroup === list._id
                          )}
                        />
                      }
                    </Card.Body>
                  </Card>
                ))}
            </div>
          </Col>
        </div>
      </Col>
    </div>
  );
};

export default Dashboard;
