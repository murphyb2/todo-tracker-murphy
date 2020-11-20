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
    case "DELETE_TODO_LIST":
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
        todoLists: state.todoLists.filter(
          (list) => list._id !== action.payload.id
        ),
      };
    case "EDIT_TODO":
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
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload.data._id) {
            return action.payload.data;
          } else {
            return todo;
          }
        }),
      };
    case "ADD_TODO":
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
    case "ADD_TODO_LIST":
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
        todoLists: [...state.todoLists, action.payload.data],
      };
    case "TODO_ERROR":
      return {
        ...state,
        success: false,
        messages: [
          ...state.messages,
          {
            success: false,
            message: action.payload.msg[0],
            id: action.payload.msg[0],
          },
        ],
      };
    case "SET_AUTH_STATE":
      return {
        ...state,
        isAuthenticated: action.payload.authenticated,
        todos: action.payload.todos,
        todoLists: action.payload.todoLists,
        profile: action.payload.user,
      };
    default:
      return state;
  }
};
