import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  todos: [],
  error: null,
  loading: true,
  isAuthenticated: false,
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
        payload: res.data.authenticated,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // GET all todos
  async function getTodos() {
    try {
      const res = await axios.get("/api/v1/todos");
      console.log("get todos res", res);
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
      await axios.delete(`/api/v1/todos/${id}`);

      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data.error,
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
      console.log(res);

      dispatch({
        type: "ADD_TODO",
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        getTodos,
        deleteTodo,
        addTodo,
        getAuthState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
