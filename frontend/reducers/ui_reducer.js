import { combineReducers } from "redux";
import modalReducer from "./modal_reducer.js";

const uiReducer = combineReducers({
  modal: modalReducer,
});

export default uiReducer;
