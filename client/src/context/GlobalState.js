import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  todos: [],
  todoLists: [],
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

  // DELETE todo list by id
  async function deleteTodoList(id) {
    try {
      const res = await axios.delete(`/api/v1/todos/list/${id}`);

      dispatch({
        type: "DELETE_TODO_LIST",
        payload: { ...res.data, id },
      });
    } catch (err) {
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data,
      });
    }
  }

  // POST new todo list
  async function addTodoList(todoList) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/v1/todos/list", todoList, config);

      dispatch({
        type: "ADD_TODO_LIST",
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

  // PATCH new todo
  async function editTodo(updates, id) {
    console.log(updates);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.patch(`/api/v1/todos/${id}`, updates, config);

      dispatch({
        type: "EDIT_TODO",
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
        todoLists: state.todoLists,
        isAuthenticated: state.isAuthenticated,
        profile: state.profile,
        messages: state.messages,
        getTodos,
        deleteTodo,
        deleteTodoList,
        addTodo,
        editTodo,
        addTodoList,
        getAuthState,
        clearMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
