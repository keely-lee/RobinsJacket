import React from 'react';
import { connect } from 'react-redux'
import WatchlistComp from './watchlist_comp'

const mSTP = state => ({

})

const mDTP = dispatch => ({

})

const UserHomeContainer = connect(mSTP, mDTP)(WatchlistComp);
export default UserHomeContainer;