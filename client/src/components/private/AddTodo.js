import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../../context/GlobalState";

const AddTodo = ({ handleSetToggled }) => {
  const [text, setText] = useState("");

  const { addTodo } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      text,
    };

    addTodo(newTodo);
  };

  return (
    <>
      <FontAwesomeIcon
        className="d-md-none"
        icon={faBars}
        onClick={() => handleSetToggled(true)}
      />
      <h3>Add new todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <button className="btn">Add todo</button>
      </form>
    </>
  );
};

export default AddTodo;
