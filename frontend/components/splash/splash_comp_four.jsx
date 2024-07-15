import React, { useEffect, useReducer } from "react";
import classNames from "classnames";

const panes = [
  {
    benefit: "Learn",
    pdispatch: {type: "choice", choice: 0},
    imgName: "splashlearn",
    header: "Learn As You Grow",
    blurb: "Our goal at RobinsJacket is to make investing in financial markets \n more affordable, more intuitive, and more fun, no matter how much \n experience you have (or don’t have).",
  },
  {
    benefit: "Manage",
    pdispatch: {type: "choice", choice: 1},
    imgName: "splashmanage",
    header: "Manage Your Portfolio",
    blurb: "Manage your portfolio in your pocket. Everything you need to \n increase your assets is available in a single app.",
  },
  {
    benefit: "Customize",
    pdispatch: {type: "choice", choice: 2},
    imgName: "splashcustomize",
    header: "Keep An Eye on Your Money",
    blurb: "Setting up customized news and notifications to stay on top of \n your assets has never been easier! Controlling the flow of info is \n up to you.",
  },
];

function intervalReducer(state, action) {
  let selected;
  switch (action.type) {
    case "choice":
      return { selected: action.choice };
    case "up":
      selected = state.selected === 0 ? 2 : state.selected - 1;
      return { selected };
    case "down":
      selected = state.selected === 2 ? 0 : state.selected + 1;
      return { selected };
    default:
      return { selected: state.selected };
  }
}

function SplashCompFour(props) {
  const [state, dispatch] = useReducer(intervalReducer, { selected: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "down" });
    }, 4000);
    return () => clearInterval(intervalId)
  }, [])

  const { blurb, header, imgName } = panes[state.selected];

  return (
    <div className="splash-comp-four">
      <div className="splash-comp-four-inside">
        <ul className="splash-four-ul">
          <h3 onClick={() => dispatch({ type: "up" })} className="splash-label">
            {"\u2191"}
          </h3>
          {
            panes.map(( {benefit, pdispatch}, _idx) => (
              <h3 
              key={benefit}
              onClick={() => dispatch(pdispatch)} 
              className={classNames("splash-label", { 'current': state.selected === pdispatch.choice })}>
                {benefit}
              </h3>
            ))
          }
          <h3 onClick={() => dispatch({ type: "down" })} className={`splash-label`}>
            {"\u2193"}
          </h3>
        </ul>

        <div className="splash-four-right">
          <div className="splash-four-img-div">
            <img src={window[imgName]} className="splash-four-img" />
          </div>
          <div className="splash-four-text-div">
            <h2 className="splash-four-header">{header}</h2>
            <p className="splash-four-p">{blurb}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashCompFour;
