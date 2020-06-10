import React from 'react';

class UserHomeGraph extends React.Component {
  constructor(props){
    super(props)
    // this.state = this.props.stocks //stocks is an object | chart is an array of k/v pairs
  } 

  mapCharts(){
    debugger
    if(Object.values(this.props.stocks).length){
      return this.props.stocks.chart.map((obj) => {
        return (
          <div>
            <li>{obj.date}</li>
            <li>{obj.open}</li>
            <li>{obj.high}</li>
            <li>{obj.low}</li>
            <li>{obj.close}</li>
          </div>
        )
      })
    }
  }

  render(){
    // let TEST = this.props.getStock("AAPL");
    // let TESTTWO = TEST["chart"]
    return (
      <div className="user-home-graph-container">

        <button type="button" onClick={() => this.props.getStock("AAPL")}>GRAB STOCK</button>

        {/* {console.log(this.props.stocks)} */}
        {this.mapCharts()}

      </div>
    )
  }



}

export default UserHomeGraph;