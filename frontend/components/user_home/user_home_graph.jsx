import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient } from 'recharts';

class UserHomeGraph extends React.Component {
  constructor(props){
    super(props)
    // this.state = this.props.stocks //stocks is an object | chart is an array of k/v pairs
  } 

  mapCharts(){
    if(Object.values(this.props.stocks).length){
      // const data = this.props.stocks.chart.map( (day) => {
      //     <div>
      //       <li>{day.date}</li>
      //       <li>{day.open}</li>
      //       <li>{day.high}</li>
      //       <li>{day.low}</li>
      //       <li>{day.close}</li>
      //     </div>
      // }) 
      
      const data = this.props.stocks.chart;
      return (
      // <AreaChart width={730} height={250} data={data}>
      //   <XAxis dataKey="date"/>
      //   <YAxis/>
      //   <Area type='monotone' dataKey='close' stroke='#8884d8' fill='#8884d8' />
      //     <Area type='monotone' dataKey='open' stroke='#8884d8' fill='#387908' />
      // </AreaChart>

        <AreaChart width={675} height={300} data={data}>

          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip/>

          <XAxis dataKey="date"/>
          <YAxis/>

          <Area type="monotone" dataKey="open" stroke="#8884d8" fillOpacity={1} fill="url(#colorUV)"/>
          <Area type="monotone" dataKey="high" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
        </AreaChart>
      
      )

      
    }
  }



  render(){
    // let TEST = this.props.getStock("AAPL");
    // let TESTTWO = TEST["chart"]
    return (
      <div className="user-home-graph-container">
        <button type="button" onClick={() => this.props.getStock("AAPL")}>GRAB STOCK</button>

        {this.mapCharts()}

      </div>
    )
  }



}

export default UserHomeGraph;