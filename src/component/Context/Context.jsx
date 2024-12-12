import { createContext, useReducer } from "react";
export const TodoContext = createContext();

const TodoItem = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          name: action.payload.name,
          date: action.payload.date,
          id: state.length,
        },
      ];
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(TodoItem, []);

  return (
    <TodoContext.Provider
      value={{
        dispatch,
        state,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
