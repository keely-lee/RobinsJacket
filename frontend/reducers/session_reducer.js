import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

//this reducer keeps track of current_user
initialState = { currentUserId: null}

const SessionReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return newState[currentUserId] = action.currentUser.id;
  case LOGOUT_CURRENT_USER:
    return newState[currentUserId] = null;
  default:
    return oldState;
  }
}

export default SessionReducer;