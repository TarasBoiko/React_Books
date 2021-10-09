import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import modalReducer from '../pages/Home/reducer/home.reducer';
import todoReducer from './todo/reducer/todo.reducer';
import bookReducer from './book/reducer/book.reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
// import monitorReducersEnhancer from './enhancers/monitorReducers';

const reducer = combineReducers({
  modalReducer: modalReducer,
  todoReducer: todoReducer,
  bookReducer: bookReducer,
});

// const enhancers = [monitorReducersEnhancer];
const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

let store = createStore(reducer, composedEnhancers);

export default store;
