import React from "react";
import { Link } from "react-router-dom";
import { receiveStocks } from "../../util/stock_api_util";
import { setTickersFormat } from "../../util/util";
// import { LineChart, Line, XAxis, YAxis, ReferenceDot } from "recharts";

class WatchlistComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: {}, // stocks: { ticker: { symbol: '', shortName: '', regularMarketPrice: ... } }
    };

    this.grabTickers = this.grabTickers.bind(this);
    this.deleteWatch = this.deleteWatch.bind(this);
    this.handleGetStocks = this.handleGetStocks.bind(this);
  }

  componentDidMount() {
    this.grabTickers();
  }

  componentDidUpdate(prevProps) {
    // Need to fix for complete accuracy. For now skip this for delete watch, save an api call.
    if (
      prevProps.currentUser.watched_stocks.length <
      this.props.currentUser.watched_stocks.length
    ) {
      this.grabTickers();
    }
  }

  grabTickers() {
    // TODO KL: Modify watched_stocks for easy ticker search. Needed for this + user_home
    // watched_stocks -> [{ticker: "AAPL", company_name: "Apple, Inc.", id: 1}, {...}, ...]
    const symbols = this.props.currentUser.watched_stocks.reduce((acc, stock) => {
      acc.push(stock.ticker);
      return acc;
    }, []);

    if (symbols.length) {
      receiveStocks(symbols.join()).then(stocks => this.setState({ stocks: setTickersFormat(stocks.quoteResponse.result, 'symbol') }));
    }
  }

  deleteWatch(ticker) {
    let updatedList = this.state.stocks;
    delete updatedList[ticker];
    this.props.deleteWatch(ticker)
    .then(this.setState({ stocks: updatedList }));
  }

  handleGetStocks() {
    return (
      <div className="watchlist">
        <table className="watchlist-table">
          <tbody>
            <tr className="watchlist-header">
              <th className="watchlist-header-title">Watchlist</th>
            </tr>

            {Object.values(this.state.stocks).map((stock, _idx) => {
              const { symbol, shortName, regularMarketPrice, marketCap } = stock;
              return (
                <tr className={`stock-row-${symbol}`} key={`row-${symbol}`}>
                  <td>
                    <button
                      className="fa-minus-button"
                      data-testid={`del-watch-${symbol}`}
                      onClick={() => this.deleteWatch(symbol)} >
                      <i className="far fa-eye-slash"></i>
                    </button>
                  </td>

                  <Link to={`/stock/${symbol}`}>
                    <td className={`stock-col-name-${symbol}`}>
                      <p>{symbol}</p>
                      <p>{shortName}</p>
                    </td>
                    <td className={`stock-col-fin-${symbol}`}>
                      <p className="currPrice">${regularMarketPrice}</p>
                      <p className="marketCap">
                        ${(marketCap / 1000000000).toFixed(2)}B
                      </p>
                      {/* ANY HISTORIC CHART DATA? */}
                    </td>
                  </Link>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return <div>{this.handleGetStocks()}</div>;
  }
}

export default WatchlistComp;
