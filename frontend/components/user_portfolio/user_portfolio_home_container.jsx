import React from 'react';
import { connect } from 'react-redux';
import user_portfolio_home_main from './user_portfolio_home_main';

const mSTP = state => ({

})

const mDTP = dispatch => ({

})

const user_portfolio_home = connect(mSTP, mDTP)(user_portfolio_home_main);
export default user_portfolio_home;
