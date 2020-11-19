import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Dashboard = ({ handleSetToggled }) => {
  const { todos, profile } = useContext(GlobalContext);
  const unfinishedTodos = todos.filter((todo) => todo.completed !== true);
  return (
    <div className="w-100">
      <FontAwesomeIcon
        className="d-md-none"
        icon={faBars}
        onClick={() => handleSetToggled(true)}
      />
      <Col>
        <h2>Welcome {profile.firstName}</h2>
        <h3>Your week at a glance...</h3>
        <Row>
          <Col>
            <ListGroup>
              <h5>Due Today</h5>
              {unfinishedTodos.map((item) => (
                <ListGroup.Item
                  key={item._id}
                  variant={item.completed ? "success" : ""}
                >
                  {item.text}
                  <Link
                    className="text-decoration-none"
                    to={`/todos/${item._id}`}
                  >
                    Edit
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <h5>Upcoming</h5>
            <h5>Yet to Complete</h5>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Dashboard;
