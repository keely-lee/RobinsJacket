import { RECEIVE_PORTFOLIO } from '../actions/portfolio_actions'

const PortfoliosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type){
    case RECEIVE_PORTFOLIO:
      newState = action.portfolio;
      return newState;
    default:
      return oldState;
  }
}

export default PortfoliosReducer;