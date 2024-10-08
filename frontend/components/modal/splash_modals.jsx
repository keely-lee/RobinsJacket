import React from "react";
import { Link } from "react-router-dom";

export const CommissionsDisclosure = () => {
  return (
    <div className="splash-modal-div">
      <h2>Commissions Disclosure</h2>
      <span>
        Commission-free trading means $0 commission trades placed on
        self-directed accounts via mobile devices or web. Keep in mind,
        other fees may still apply.
      </span>
    </div>
  );
};

export const FractionalDisclosure = ({ closeModal }) => {
  return (
    <div className="splash-modal-div">
      <h2>Fractional Shares Disclosure</h2>
      <span>
        Fractional shares are illiquid outside of RobinsJacket and not
        transferable. For a complete explanation of conditions, restrictions
        and limitations associated with fractional shares, see our{" "}
        <Link
          to="/loremips"
          className="link-green"
          onClick={() => closeModal()}
        >
          Customer Agreement
        </Link>{" "}
        related to fractional shares.
      </span>
    </div>
  );
};
