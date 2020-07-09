import { updateUser } from "../util/session_api_util";
import { receiveCurrentUser } from "./session_actions";

// export const UPDATE_WATCHLIST = "UPDATE_WATCHLIST";

// export const receiveWatchlist = (user) => {
//   return {
//     type: UPDATE_WATCHLIST,
//     user
//   }
// }

export const update = user => dispatch => {
  return updateUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
}

import * as StocksWatchlistUtil from "../util/stocks_watchlist_api_util";

export const ADD_WATCH = "ADD_WATCH";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const receiveWatchlist = watchlist => {
  return {
    type: ADD_WATCH,
    watchlist
  }
}

export const createWatch = stock => dispatch => {
  debugger
  return StocksWatchlistUtil.postWatch(stock)
    .then(user => {
      debugger
      dispatch(receiveCurrentUser(user))
      debugger
    })
  //   .then(watchlist => {
  //     debugger
  //       dispatch(receiveWatchlist(watchlist))
  //   })
  //   .fail(err => {
  //     debugger
  //     dispatch(receiveErrors(err.responseJSON))
  //   })


}