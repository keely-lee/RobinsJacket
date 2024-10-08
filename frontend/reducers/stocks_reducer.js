import { RECEIVE_STOCKS, RECEIVE_STOCK, CLEAR_STOCKS } from "../actions/stock_actions";

const StocksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_STOCKS:
      newState = action.stocks;
      return newState;
    case RECEIVE_STOCK:
      newState = action.stock;
      return newState;
    case CLEAR_STOCKS:
      return {};
    default:
      return oldState;
  }
};

export default StocksReducer;
