import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  todos: [],
  isAuthenticated: false,
  profile: {},
  messages: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  // GET auth state
  async function getAuthState() {
    try {
      const res = await axios.get("/auth/status");
      dispatch({
        type: "SET_AUTH_STATE",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // GET all todos
  async function getTodos() {
    try {
      const res = await axios.get("/api/v1/todos");
      dispatch({
        type: "GET_TODOS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  // DELETE by id
  async function deleteTodo(id) {
    try {
      const res = await axios.delete(`/api/v1/todos/${id}`);

      dispatch({
        type: "DELETE_TODO",
        payload: { ...res.data, id },
      });
    } catch (err) {
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data,
      });
    }
  }

  // POST new todo
  async function addTodo(todo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/v1/todos", todo, config);

      dispatch({
        type: "ADD_TODO",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data,
      });
    }
  }

  // Reset message
  async function clearMessage(id) {
    dispatch({
      type: "CLEAR_MESSAGE",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        isAuthenticated: state.isAuthenticated,
        profile: state.profile,
        messages: state.messages,
        getTodos,
        deleteTodo,
        addTodo,
        getAuthState,
        clearMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
