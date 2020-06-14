import React from 'react';
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

                          {/* {this.props.currentUser.watched_stocks.map( (stock) => (
                            <tr className="stock-row-1">
                              <td className="stock-name col-1">
                                <p>{stock.ticker}</p>
                                <p>{stock.company_name}</p>
                              </td>
                              <td className="graph col-2">
                                GRAPH
                              </td> */}

                {console.log("TEST")}
                {console.log(watchedStocks)}
                { watchedStocks.map((stock, idx) => (
                  <tr className={`stock-row-${idx}`} key={`row-${idx}`}>
                    <td className={`stock-col-name-${idx}`}>
                      <p>{stock.quote.symbol}</p>
                      <p>{stock.quote.companyName}</p>
                    </td>
                    <td className={`stock-col-graph-${idx}`}>
                      GRAPH
                    </td>
            
                    <td className={`stock-col-fin-${idx}`}>
                      <p className="currPrice">${stock.quote.latestPrice}</p>
                      <p className="marketCap">${((stock.quote.marketCap) / 1000000000).toFixed(2)}B</p>
                    </td>
                  </tr> 
                )) }
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