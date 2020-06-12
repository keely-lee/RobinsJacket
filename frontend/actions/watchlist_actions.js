import { updateWatchlist } from "../util/watchlist_api_util";

export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";
// export const REMOVE_STOCK = "REMOVE_STOCK";

export const receiveWatchlist = (watchlist) => {
  return {
    type: RECEIVE_WATCHLIST,
    watchlist
  }
}


export const updateWatchlist = watchlist => dispatch => {
  return updateWatchlist(watchlist)
    .then(watchlist => dispatch(receiveWatchlist(watchlist)))
}