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
              <th>Portfolio</th>
            </tr>
            {/* ticker, stock graph, currPrice, maybDiff? */}
            <tr className="stock-row-1">
              <td key="ticker1">
                <p>AAPL</p>
                <p>Apple Inc.</p>
              </td>
              <td>
                GRAPH
              </td>
              <td>
                <p className="currPrice">$100.00</p>
                <p className="marketCap">$1B</p>
              </td>
            </tr>
            <tr>
              <td key="ticker2">
                <p>FB</p>
                <p>Facebook Inc.</p>
              </td>
              <td>
                GRAPH
              </td>
              <td>
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