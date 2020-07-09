import * as StocksWatchlistUtil from "../util/stocks_watchlist_api_util";
import { receiveCurrentUser } from "./session_actions";

// import { updateUser } from "../util/session_api_util";
// export const update = user => dispatch => {
//   return updateUser(user)
//     .then(user => dispatch(receiveCurrentUser(user)))
// }

// export const ADD_WATCH = "ADD_WATCH";

// export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
// export const receiveErrors = (errors) => {
//   return {
//     type: RECEIVE_ERRORS,
//     errors
//   }
// }

// export const receiveWatchlist = watchlist => {
//   return {
//     type: ADD_WATCH,
//     watchlist
//   }
// }

export const createWatch = stock => dispatch => {
  return StocksWatchlistUtil.postWatch(stock)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const deleteWatch = stock => dispatch => {
  return StocksWatchlistUtil.deleteWatch(stock)
    .then(user => dispatch(receiveCurrentUser(user)))
}