import React from "react";
import { connect } from "react-redux";
import Splash from "./splash";
import { openModal } from "../../actions/modal_actions";

const mSTP = () => ({});

const mDTP = (dispatch) => ({
  commissions: (
    <div className="splash-modal">
      <button onClick={() => dispatch(openModal("commissionsDisclosure"))}>
        {"\u24D8"} Commissions Disclosure
      </button>
    </div>
  ),
  fractional: (
    <div className="splash-modal">
      <button
        onClick={() => dispatch(openModal("fractionalDisclosure"))}>
        {"\u24D8"} Fractional Shares Disclosure
      </button>
    </div>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(Splash);
