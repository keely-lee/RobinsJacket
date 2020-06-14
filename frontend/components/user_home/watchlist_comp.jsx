import React from 'react';
import { displayStocks } from '../../actions/stock_actions';

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
      const tickers = this.props.currentUser.watched_stocks.map( (stock) => (
        stock.ticker
      ))
      this.setState({ tickers })
      displayStocks(...tickers)
      
      // let stocks = this.props.getStocks(...tickers)
    }
  }

  handleGetStocks(){
    if(this.props.currentUser.watched_stocks.length){
      return (
        <div className="watchlist">
            <table className="watchlist-table">
              <tbody>
                <tr className="watchlist-header">
                  {/* HARD CODED FOR NOW, NEED TO CHANGE LATER */}
                  <th className="watchlist-header-title">Watchlist</th>
                </tr>
                {/* ticker, stock graph, currPrice, maybDiff? */}

          {this.props.currentUser.watched_stocks.map( (stock) => (
                <tr className="stock-row-1">
                  <td className="stock-name col-1">
                    <p>{stock.ticker}</p>
                    <p>{stock.company_name}</p>
                  </td>
                  <td className="graph col-2">
                    GRAPH
                    </td>
          
                  {/* <td className="stock-price col-3">
                    <p className="currPrice">$100.00</p>
                    <p className="marketCap">$1B</p>
                  </td>
                </tr>
                <tr className="stock-row-2">
                  <td className="stock-name col-1">
                    <p>FB</p>
                    <p>Facebook Inc.</p>
                  </td>
                  <td className="graph col-2">
                    GRAPH
                    </td>
                  <td className="stock-price col-3">
                    <p className="currPrice">$500.00</p>
                    <p className="marketCap">$2B</p>
                  </td> */}
                </tr>


          ))}

              </tbody>
            </table>
          </div>
      )
    }
  }

  render(){
    return (

      <div>
        {this.handleGetStocks()}
      </div>
      
      // <div className="watchlist">
      //   <table className="watchlist-table">
      //     <tbody>
      //       <tr className="watchlist-header">
      //         {/* HARD CODED FOR NOW, NEED TO CHANGE LATER */}
      //         <th className="watchlist-header-title">Watchlist</th>
      //       </tr>
      //       {/* ticker, stock graph, currPrice, maybDiff? */}
      //       <tr className="stock-row-1">
      //         <td className="stock-name col-1">
      //           <p>AAPL</p>
      //           <p>Apple Inc.</p>
      //         </td>
      //         <td className="graph col-2">
      //           GRAPH
      //         </td>
      //         <td className="stock-price col-3">
      //           <p className="currPrice">$100.00</p>
      //           <p className="marketCap">$1B</p>
      //         </td>
      //       </tr>
      //       <tr className="stock-row-2">
      //         <td className="stock-name col-1">
      //           <p>FB</p>
      //           <p>Facebook Inc.</p>
      //         </td>
      //         <td className="graph col-2">
      //           GRAPH
      //         </td>
      //         <td className="stock-price col-3">
      //           <p className="currPrice">$500.00</p>
      //           <p className="marketCap">$2B</p>
      //         </td>
      //       </tr>
      //     </tbody>
      //   </table>
      // </div>
    )
  }

}

export default WatchlistComp;