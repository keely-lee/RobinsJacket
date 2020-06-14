import { RECEIVE_STOCKS, RECEIVE_STOCK } from "../actions/stock_actions"

const StocksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    // case RECEIVE_STOCKS:
    //   newState = Object.assign({}, oldState, action.stocks);
    //   return newState;
    case RECEIVE_STOCK:
      let newState = action.stock;
      return newState;
    default:
      return oldState;
  };
}

export default StocksReducer;