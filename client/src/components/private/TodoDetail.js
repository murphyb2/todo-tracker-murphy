import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import Button from "react-bootstrap/Button";

const TodoDetail = () => {
  const { id } = useParams();
  const { todos } = useContext(GlobalContext);

  const todo = todos.find((todo) => todo._id === id);

  return (
    <div>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
      <h1>{todo.text}</h1>
    </div>
  );
};

export default TodoDetail;
