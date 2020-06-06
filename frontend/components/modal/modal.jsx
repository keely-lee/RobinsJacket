import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CommissionsDisclosure from './commission_disclosure';

function Modal({ modal, closeModal }) {
  if (!modal) {
    // debugger
    return null;
  }
  let component;
  // debugger
  switch (modal) {
    case 'commissionsDisclosure':
      component = <CommissionsDisclosure />;
      break;
    // case 'signup':
    //   component = <SignupFormContainer />;
    //   break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mSTP = state => ({
  modal: state.ui.modal
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);