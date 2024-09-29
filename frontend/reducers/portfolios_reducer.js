import { CLEAR_ERRORS, RECEIVE_PORTFOLIO } from "../actions/portfolio_actions";

const PortfoliosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      newState = action.portfolio;
      return newState;
    case CLEAR_ERRORS:
      return {};
    default:
      return oldState;
  }
};

export default PortfoliosReducer;
