import React from 'react';

class WatchlistComp extends React.Component{
  constructor(props){
    super(props)
    //need counter for num stocks on watchlist table for keys???
  }

  render(){
    return (
      <div className="watchlist">
        <table className="watchlist-table">
          <tbody>
            <tr className="watchlist-header">
              {/* HARD CODED FOR NOW, NEED TO CHANGE LATER */}
              <th className="watchlist-header-title">Watchlist</th>
            </tr>
            {/* ticker, stock graph, currPrice, maybDiff? */}
            <tr className="stock-row-1">
              <td className="stock-name col-1">
                <p>AAPL</p>
                <p>Apple Inc.</p>
              </td>
              <td className="graph col-2">
                GRAPH
              </td>
              <td className="stock-price col-3">
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default WatchlistComp;