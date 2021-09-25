import { combineReducers, createStore } from 'redux';
import modalReducer from '../pages/Home/reducer/home.reducer';
import todoReducer from '../store/Todo/reducer/todo.reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
// import monitorReducersEnhancer from './enhancers/monitorReducers';

const reducer = combineReducers({
  modalReducer: modalReducer,
  todoReducer: todoReducer,
});

// const enhancers = [monitorReducersEnhancer];
const composedEnhancers = composeWithDevTools();

let store = createStore(reducer, composedEnhancers);

export default store;
