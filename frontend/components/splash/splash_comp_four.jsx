import React from 'react';

class SplashCompFour extends React.Component {
  constructor(props){
    super(props);
    this.state = {selected: 0}
    this.chooseBenefit = this.chooseBenefit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.interval();
  }

  componentDidMount(){
    // this.chooseBenefit(choice)
  }

  chooseBenefit(choice) {
    this.setState({selected: choice})
  }

  toggle(direction){
    if (this.state.selected === 2 && direction === 1)
      this.setState({selected: 0})
    else if (this.state.selected === 0 && direction === -1)
      this.setState({selected: 2})
    else
      this.setState({selected: this.state.selected + direction});
  }

  interval(){
    setInterval( () => {
      this.toggle(1);
    }, 5000 )
  }


  render(){

    const panes = [
      { benefit: 'Learn', 
        content: <img src={window.splashlearn} className="splash-four-img"/>, 
        text: (
          <div className="splash-four-div">
            <h2 className="splash-four-header">Learn As You Grow</h2>
            <p className="splash-four-p">Our goal at RobinsJacket is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).</p>
          </div>
        )
      },
      { benefit: 'Manage', 
        content: <img src={window.splashmanage} className="splash-four-img"/>,
        text: (
          <div className="splash-four-div">
            <h2 className="splash-four-header">Manage Your Portfolio</h2>
            <p className="splash-four-p">Manage your portfolio in your pocket. Everything you need to increase your assets is available in a single app.</p>
          </div>
        )
      },
      {
        benefit: 'Customize', content: <img src={window.splashcustomize} className="splash-four-img"/>,
        text: (
          <div className="splash-four-div">
            <h2 className="splash-four-header">Keep An Eye on Your Money</h2>
            <p className="splash-four-p">Setting up customized news and notifications to stay on top of your assets has never been easier! Controlling the flow of info is up to you.</p>
          </div>
        )
      }
    ];
    const pane = panes[this.state.selected];
    let zero = "";
    let one = "";
    let two = "";
    switch (this.state.selected) {
      case 0:
        zero = "current";
        one = "";
        two = "";
        break;
      case 1:
        one = "current";
        zero = "";
        two = "";
        break;
      case 2:
        two = "current";
        zero = "";
        one = "";
        break;
    }

    // console.log(zero)
    // console.log(one)
    // console.log(two)
    // console.log(this.state.selected)

    return (
      <div className="splash-comp-four">
        <div className="splash-comp-four-inside">
          <ul className="splash-four-ul">
            <h3 onClick={() => this.toggle(-1)} className={`splash-label`}>
              {'\u2191'}
            </h3>
            <h3 onClick={() => this.chooseBenefit(0)} className={`splash-label-${zero}`}>
              {panes[0].benefit}
            </h3>
            <h3 onClick={() => this.chooseBenefit(1)} className={`splash-label-${one}`}>
              {panes[1].benefit}
            </h3>
            <h3 onClick={() => this.chooseBenefit(2)} className={`splash-label-${two}`}>
              {panes[2].benefit}
            </h3>
            <h3 onClick={() => this.toggle(1)} className={`splash-label`}>
              {'\u2193'}
            </h3>
          </ul>

          <div className="splash-four-right">
            <div className="splash-four-img-div">
              {pane.content}
            </div>
            <div className="splash-four-text-div">
              {pane.text}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SplashCompFour;