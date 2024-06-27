import {
  RECEIVE_PORTFOLIO,
  RECEIVE_TRANSACTION_ERRORS,
  CLEAR_ERRORS,
} from "../actions/portfolio_actions";

const transactionErrorsReducer = (errors = [], action) => {
  Object.freeze(errors);
  let newState = [];

  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      return newState;
    case RECEIVE_TRANSACTION_ERRORS:
      newState = Object.assign([], errors, action.errors);
      return newState;
    case CLEAR_ERRORS:
      return newState;
    default:
      return errors;
  }
};

export default transactionErrorsReducer;
