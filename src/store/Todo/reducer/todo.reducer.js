import { createSlice } from '@reduxjs/toolkit';
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from '../actions/todo.actions';

const initialState = [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos,
  },
});

export const actions = addTodoReducer.actions;
export const todoReducer = addTodoReducer.reducer;

export default todoReducer;
