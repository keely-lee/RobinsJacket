import React from "react";
import { Link } from "react-router-dom";

export const CommissionsDisclosure = (closeModal) => {
  return (
    <div className="modal-background" onClick={() => closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        <div className="commissions-disclose-div">
          <h2>Commissions Disclosure</h2>
          <span>
            Commission-free trading means $0 commission trades placed on
            self-directed accounts via mobile devices or web. Keep in mind,
            other fees may still apply.
          </span>
        </div>
      </div>
    </div>
  );
};

export const FractionalDisclosure = ({ closeModal }) => {
  return (
    <div className="modal-background" onClick={() => closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        <div className="commissions-disclose-div">
          <h2>Fractional Shares Disclosure</h2>
          <span>
            Fractional shares are illiquid outside of RobinsJacket and not
            transferable. For a complete explanation of conditions, restrictions
            and limitations associated with fractional shares, see our{" "}
            <Link
              to="/loremips"
              className="link-green-only"
              onClick={() => closeModal()}
            >
              Customer Agreement
            </Link>{" "}
            related to fractional shares.
          </span>
        </div>
      </div>
    </div>
  );
};
