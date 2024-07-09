import * as StocksWatchlistUtil from "../util/stocks_watchlist_api_util";
import { receiveCurrentUser } from "./session_actions";

// consolidate all the "receive errors later, implement clear errors"
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

// POST & DESTROY doesn't refresh watchlist bc user ref remains the same
export const createWatch = (stock) => (dispatch) => {
  return (
    StocksWatchlistUtil.postWatch(stock)
      .then((user) => dispatch(receiveCurrentUser(user)))
      .fail(err => dispatch(receiveErrors(err)))
  );
};

export const deleteWatch = (tickerOrStockid) => (dispatch) => {
  return StocksWatchlistUtil.deleteWatch(tickerOrStockid)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((err) => dispatch(receiveErrors(err)));
};
