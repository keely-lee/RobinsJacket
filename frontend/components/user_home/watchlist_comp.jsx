import React from 'react';
import { LineChart, Line, XAxis, YAxis, ReferenceDot } from 'recharts';
import { receiveStocks } from '../../util/stock_api_util';

class WatchlistComp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      watches: {}
    }

  }

  componentDidMount(){
    this.grabTickers();
  }

  grabTickers(){
    if ( this.props.currentUser.watched_stocks.length ) {
      let tickers = "";
      let watches = {};
      this.props.currentUser.watched_stocks.map( (stock) => {
        console.log(stock)
        tickers = tickers + stock.ticker + ","
        watches[stock.ticker] = stock.id
      })
      this.setState({watches})

      //alphabetize
      receiveStocks(tickers)
        .then(res => this.setState({stocks: res}, () => console.log(this.state) ))
    }
  }

  deleteWatch(id){
    return (this.props.deleteWatch(id))
        // .then(this.setState({}))
  }

  handleGetStocks(){
    let val;
    console.log("HANDLE GET STOCKS")
    console.log(this.state)
    if (this.props.currentUser.watched_stocks.length && this.state.stocks){
      const watchedStocks = Object.values(this.state.stocks)
      console.log(this.state.stocks)
      if (watchedStocks){
        return (
          <div className="watchlist">
            <table className="watchlist-table">
              <tbody>
                <tr className="watchlist-header">
                  <th className="watchlist-header-title">Watchlist</th>
                </tr>

                { watchedStocks.map((stock, idx) => {
                  stock.chart[0].open < stock.chart[stock.chart.length-1].close ? (val='#00C805') : (val='#ff0000');
                  return (
                    <tr className={`stock-row-${idx}`} key={`row-${idx}`}>
                      <td className={`stock-col-name-${idx}`}>
                        <p>{stock.quote.symbol}</p>
                        <p>{stock.quote.companyName}</p>
                        <button onClick={() => this.deleteWatch(this.state.watches[stock.quote.symbol])}>delete</button>
                      </td>

                      <td className={`stock-col-graph-${idx}`}>
                      { <LineChart width={65} height={35} data={stock.chart}>
                            <YAxis width={0} type="number" domain={['dataMin', 'dataMax']} tick={false} axisLine={false}/>
                            <Line type='monotone' dataKey='close' stroke={val} strokeWidth={1} dot={false}/>
                        </LineChart> }
                      </td>
              
                      <td className={`stock-col-fin-${idx}`}>
                        <p className="currPrice">${stock.quote.latestPrice}</p>
                        <p className="marketCap">${((stock.quote.marketCap) / 1000000000).toFixed(2)}B</p>
                      </td>
                    </tr> 
                  )
                }) }
              </tbody>
            </table>
          </div>
        )
      }
    }
  }

  render(){
    return (
      <div>
        <h1>I AM IN THE WATCHLIST HEADER</h1>
        {this.handleGetStocks()}
      </div>
    )
  }

}

export default WatchlistComp;