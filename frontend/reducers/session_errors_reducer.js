import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (errors = [], action) => {
  Object.freeze(errors);
  let newState = [];

  switch (action.type){
    case RECEIVE_CURRENT_USER:
      return newState;
    case RECEIVE_ERRORS:
      newState = Object.assign([], errors, action.errors)
      return newState;
    case CLEAR_ERRORS:
      return newState;
    default:
      return errors;
  }
};

export default sessionErrorsReducer;