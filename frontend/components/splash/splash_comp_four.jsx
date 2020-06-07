import React from 'react';

class SplashCompFour extends React.Component {
  constructor(props){
    super(props);
    this.state = {selected: 0}

    this.chooseBenefit = this.choose
  }

  chooseBenefit(choice) {
    this.setState = ({ selected: choice });
  }

  toggle(direction) {
    this.setState = ({ selected: this.state[selected] + direction });
  }

  render(){
    return (
      <div>
        <ul>
          <h3 onClick={() => this.toggle(-1)}>{'\u1F815'}</h3>
          <h3 onClick={() => this.chooseBenefit(0)}>{this.props.benefit[0]}</h3>
          <h3 onClick={() => this.chooseBenefit(1)}>{this.props.benefit[1]}</h3>
          <h3 onClick={() => this.chooseBenefit(2)}>{this.props.benefit[2]}</h3>
          <h3 onClick={() => this.toggle(1)}>{'\u1F817'}</h3>
        </ul>
        <div>
          {this.props.image}
        </div>
      </div>
    )
  }

}

export default SplashCompFour;