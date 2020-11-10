import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { CommissionsDisclosure, 
          FractionalDisclosure } from './splash_modals';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  // debugger
  switch (modal) {
    case 'commissionsDisclosure':
      component = <CommissionsDisclosure closeModal={closeModal}/>;
      break;
    case 'fractionalDisclosure':
      component = <FractionalDisclosure closeModal={closeModal} />;
      break;
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