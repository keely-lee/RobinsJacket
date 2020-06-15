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