import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient } from 'recharts';

class UserHomeGraph extends React.Component {
  constructor(props){
    super(props)
    // this.state = this.props.stocks //stocks is an object | chart is an array of k/v pairs
  } 

  mapCharts(){
    if(Object.values(this.props.stocks).length){
      const data = this.props.stocks.chart;

      return (
        <AreaChart width={675} height={300} data={data}>
          <defs>
            <linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff9a7e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff9a7e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9adaf7" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9adaf7" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ee6741" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ee6741" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#64bfe8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#64bfe8" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip className="tooltip"/>

          <XAxis dataKey="date" tick={{ fill: 'white' }}/>
          <YAxis type="number" domain={['dataMin-5', 'dataMax+5']} tick={{ fill: 'white' }}/>

          <Area type="monotone" dataKey="open" stroke="#ff9a7e" fillOpacity={1} fill="url(#colorOpen)"/>
          <Area type="monotone" dataKey="high" stroke="#9adaf7" fillOpacity={1} fill="url(#colorHigh)"/>
          <Area type="monotone" dataKey="low" stroke="#ee6741" fillOpacity={1} fill="url(#colorLow)"/>
          <Area type="monotone" dataKey="close" stroke="#64bfe8" fillOpacity={1} fill="url(#colorClose)"/>
        </AreaChart>
      )
    }
  }

  render(){
    let symbol = "";
    let change = "pos";
    let diff = 0;
    if (Object.values(this.props.stocks).length) {
      diff = (this.props.stocks.quote.iexRealtimePrice - this.props.stocks.quote.previousClose).toFixed(2);
      if (diff > 0) {
        symbol = "+";
        change = "pos"
      } else {
        change = "neg"
      }
    }

    return (
      <div className="user-home-graph-container">
        <h2>Welcome to RobinsJacket!</h2>
        {(Object.values(this.props.stocks).length) ? (
        <div className="user-home-graph-wrapper">
          <span className="company-name">{this.props.stocks.quote.companyName} ({this.props.stocks.quote.symbol})</span>
          <span className="current-price">${this.props.stocks.quote.iexRealtimePrice}</span>
          <span className={`${change}-prev-close`}>{symbol}{diff}</span>
            <div className="graph-div">{this.mapCharts()}</div>
        </div>
        ) : null }
      </div>
    )
  }



}

export default UserHomeGraph;