import React from 'react';
import { LineChart, Line, XAxis, YAxis, ReferenceDot } from 'recharts';
import { receiveStocks } from '../../util/stock_api_util';

class WatchlistComp extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount(){
    this.grabTickers()
  }

  grabTickers(){
    if ( this.props.currentUser.watched_stocks.length ) {
      let tickers = "";
      this.props.currentUser.watched_stocks.map( (stock) => (
        tickers = tickers + stock.ticker + ","
      ))

      receiveStocks(tickers)
        .then(res => this.setState({stocks: res}, () => console.log(this.state) ))
    }
  }

  handleGetStocks(){
    let val;

    if (this.props.currentUser.watched_stocks.length && this.state.stocks){
      const watchedStocks = Object.values(this.state.stocks)
      if (watchedStocks){
        return (
          <div className="watchlist">
            <table className="watchlist-table">
              <tbody>
                <tr className="watchlist-header">
                  <th className="watchlist-header-title">Watchlist</th>
                </tr>

                { watchedStocks.map((stock, idx) => {
                  stock.chart[0].open < stock.chart[6].close ? (val='#00C805') : (val='#ff0000');
                  return (
                    <tr className={`stock-row-${idx}`} key={`row-${idx}`}>
                      <td className={`stock-col-name-${idx}`}>
                        <p>{stock.quote.symbol}</p>
                        <p>{stock.quote.companyName}</p>
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
        {this.handleGetStocks()}
      </div>
    )
  }

}

export default WatchlistComp;