import { combineReducers } from 'redux';
import modalReducer from './modal_reducer.js';

const uiReducer = combineReducers({
  ui: modalReducer;
})

export default uiReducer;