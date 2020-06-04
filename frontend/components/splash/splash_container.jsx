import React from 'react';
import { connect } from 'react-redux'
import Splash from './splash'

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

const SplashContainer = connect(mSTP, mDTP)(Splash);
export default SplashContainer;