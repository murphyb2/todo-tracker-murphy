export default (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TODO_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_AUTH_STATE":
      return {
        ...state,
        isAuthenticated: action.payload.authenticated,
        todos: action.payload.todos,
        profile: action.payload.user,
      };
    default:
      return state;
  }
};
