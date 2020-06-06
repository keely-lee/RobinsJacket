import React from 'react';
import { connect } from 'react-redux'
import Splash from './splash'
import { openModal } from '../../actions/modal_actions'

const mSTP = state => ({

});

const mDTP = dispatch => ({
  otherForm: (
    <div className="disclosure-modal" >
      <button onClick={() => dispatch(openModal('commissionsDisclosure'))}  >
        {'\u24D8'} Commissions Disclosure
      </button>
    </div>
  ),
});

const SplashContainer = connect(mSTP, mDTP)(Splash);
export default SplashContainer;