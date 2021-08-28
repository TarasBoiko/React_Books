import { combineReducers, createStore } from 'redux';
import modalReducer from './modal/modalReducer';

const reducer = combineReducers({
  modalReducer,
});

let store = createStore(reducer);

export default store;
