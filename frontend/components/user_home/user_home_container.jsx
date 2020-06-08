import React from 'react';
import { connect } from 'react-redux'
import UserHome from './user_home'
import { logout } from "../../actions/session_actions"


//usercontainer receive currentUser, f(logout)

const mSTP = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
})

const UserHomeContainer = connect(mSTP, mDTP)(UserHome);
export default UserHomeContainer;