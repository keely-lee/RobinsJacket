import * as StocksWatchlistUtil from "../util/stocks_watchlist_api_util";
import { receiveCurrentUser } from "./session_actions";

// import { updateUser } from "../util/session_api_util";
// export const update = user => dispatch => {
//   return updateUser(user)
//     .then(user => dispatch(receiveCurrentUser(user)))
// }

// export const receiveErrors = err => {
//   type: RECEIVE
// }

export const createWatch = (stock) => (dispatch) => {
  return (
    StocksWatchlistUtil.postWatch(stock)
      .then((user) => dispatch(receiveCurrentUser(user)))
      // .fail(err => dispatch(receiveErrors(err)))
      .fail((err) => console.log(err))
  );
};

export const deleteWatch = (stockid) => (dispatch) => {
  return StocksWatchlistUtil.deleteWatch(stockid)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((err) => dispatch(receiveErrors(err)));
};
