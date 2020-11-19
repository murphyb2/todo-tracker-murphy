export default (state, action) => {
  switch (action.type) {
    case "CLEAR_MESSAGE":
      return {
        ...state,
        messages: state.messages.filter((msg) => msg.id !== action.payload),
      };
    case "GET_TODOS":
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case "DELETE_TODO":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            success: action.payload.success,
            message: action.payload.msg,
            id: action.payload.id,
          },
        ],
        todos: state.todos.filter((todo) => todo._id !== action.payload.id),
      };
    case "ADD_TODO":
      console.log(action.payload);
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            success: action.payload.success,
            message: action.payload.msg,
            id: action.payload.data._id,
          },
        ],
        todos: [...state.todos, action.payload.data],
      };
    case "TODO_ERROR":
      return {
        ...state,
        success: false,
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
