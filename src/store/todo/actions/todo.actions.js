export const addTodos = (state, action) => {
  state.push(action.payload);
  return state;
};

export const removeTodos = (state, action) => {
  return state.filter((item) => item.id !== action.payload);
};

export const updateTodos = (state, action) => {
  return state.map((todo) => {
    if (todo.id === action.payload.id) {
      return {
        ...todo,
        item: action.payload.item,
      };
    }
    return todo;
  });
};

export const completeTodos = (state, action) => {
  return state.map((todo) => {
    if (todo.id === action.payload) {
      return {
        ...todo,
        completed: true,
      };
    }
    return todo;
  });
};
