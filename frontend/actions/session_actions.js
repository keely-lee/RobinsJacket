import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
// export const SIGNUP_USER = 'SIGNUP_USER';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const login = user => dispatch => {
  return APIUtil.loginUser(user)
    .then(user => dispatch(APIUtil.receiveCurrentUser(user)))
}

export const logout = () => dispatch => {
  return APIUtil.logoutUser()
    .then(() => dispatch(logoutCurrentUser()))
}

export const signup = user => dipsatch => {
  return APIUtil.createUser(user)
    .then(user => dispatch(receiveCurrentUser(user))) 
} //catch(errors???)