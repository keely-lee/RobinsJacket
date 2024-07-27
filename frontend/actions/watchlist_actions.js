import * as StocksWatchlistUtil from "../util/stocks_watchlist_api_util";
import { receiveCurrentUser } from "./session_actions";
import { receiveErrors } from "./session_actions";

// consolidate all receive errors actions, implement clear errors"

// POST & DESTROY doesn't refresh watchlist bc user ref remains the same
export const createWatch = (stock) => (dispatch) => {
  return StocksWatchlistUtil.postWatch(stock).then((user) =>
    dispatch(receiveCurrentUser(user)),
  )
  .fail(err => dispatch(receiveErrors(err)))
};

export const deleteWatch = (tickerOrStockid) => (dispatch) => {
  return StocksWatchlistUtil.deleteWatch(tickerOrStockid).then((user) =>
    dispatch(receiveCurrentUser(user)),
  );
  // .fail((err) => dispatch(receiveErrors(err)));
};
