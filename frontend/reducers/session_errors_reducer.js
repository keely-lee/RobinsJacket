import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (errors = [], action) => {
  Object.freeze(errors);
  let newState = [];

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = Object.assign([], errors, action.errors)
      return null;
    default:
      return errors;
  }
};

export default sessionErrorsReducer;