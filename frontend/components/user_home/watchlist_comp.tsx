import React from "react";
import { Link } from "react-router-dom";
import difference from "lodash/difference";
import { receiveStocks } from "../../util/stock_api_util";
import { setTickersFormat } from "../../util/util";
import { MarketStock } from "../../interfaces";

interface MyProps {
  currentUser: any;
  deleteWatch: Function;
}

interface MyState {
  stocks: {
    ticker?: MarketStock,
  },
}

class WatchlistComp extends React.Component <MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      stocks: {},
    }

    this.grabTickers = this.grabTickers.bind(this);
    this.deleteWatch = this.deleteWatch.bind(this);
    this.handleGetStocks = this.handleGetStocks.bind(this);
  }

  componentDidMount() {
    this.grabTickers();
  }

  componentDidUpdate() {
    if (difference(
        Object.keys(this.props.currentUser.watched_stocks),
        Object.keys(this.state.stocks)
      ).length) {
      this.grabTickers();
    }
  }

  grabTickers() {
    const symbols: string = Object.keys(this.props.currentUser.watched_stocks).join();
    receiveStocks(symbols).then((stocks) =>
      this.setState({
        stocks: setTickersFormat(stocks.quoteResponse.result, "symbol"),
      }),
    );
  }

  deleteWatch(ticker) {
    const updatedStocks = Object.assign({}, this.state.stocks);
    delete updatedStocks[ticker];
    this.props.deleteWatch(ticker).then(this.setState({ stocks: updatedStocks }));
  }

  handleGetStocks() {
    const tickers = Object.keys(this.props.currentUser.watched_stocks).sort()
    return (
      <div className="watchlist-main">
        <table className="watchlist-table">
          <tbody>
            <tr className="watchlist-header">
              <th className="watchlist-header-title">Watchlist</th>
            </tr>

            {tickers.map((ticker, _idx) => {
              const { symbol, shortName, regularMarketPrice, marketCap } = this.state.stocks[ticker] || {};
              if (!symbol || !shortName || !regularMarketPrice || !marketCap) return null;
              return (
                <tr className={`stock-row-${symbol}`} key={`row-${symbol}`}>
                  <td>
                    <button
                      className="fa-minus-button"
                      data-testid={`del-watch-${symbol}`}
                      onClick={() => this.deleteWatch(symbol)}
                    >
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
