import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  linearGradient,
  ResponsiveContainer,
} from "recharts";

class UserHomeGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  __mapData__() {
    const data = Object.values(this.props.stocks)[0];
    const mappedData = data.timestamp.map((dt, idx) => {
      const prices = data.indicators.quote[0];
      return {
        date: new Date(dt * 1000).toLocaleDateString("en-US"), // dt -> epoch timestamp in seconds
        open: prices.open[idx].toFixed(4),
        close: prices.close[idx].toFixed(4),
        high: prices.high[idx].toFixed(4),
        low: prices.low[idx].toFixed(4),
      };
    });
    return mappedData;
  }

  mapCharts() {
    if (Object.keys(this.props.stocks).length) {
      const data = this.__mapData__();
      return (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
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
            <Tooltip className="tooltip" />

            <XAxis dataKey="date" tick={{ fill: "white", fontSize: 12 }} />
            <YAxis
              type="number"
              tick={{ fill: "white", fontSize: 12 }}
              domain={[
                (dataMin) => {
                  if (dataMin - 5 < 0) return 0;
                  else return Math.floor(dataMin) - 5;
                },
                (dataMax) => Math.ceil(dataMax) + 5,
              ]}
            />

            <Area
              type="monotone"
              dataKey="open"
              stroke="#ff9a7e"
              fillOpacity={1}
              fill="url(#colorOpen)"
            />
            <Area
              type="monotone"
              dataKey="high"
              stroke="#9adaf7"
              fillOpacity={1}
              fill="url(#colorHigh)"
            />
            <Area
              type="monotone"
              dataKey="low"
              stroke="#ee6741"
              fillOpacity={1}
              fill="url(#colorLow)"
            />
            <Area
              type="monotone"
              dataKey="close"
              stroke="#64bfe8"
              fillOpacity={1}
              fill="url(#colorClose)"
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    }
  }

  render() {
    if (!Object.keys(this.props.stocks).length) return null;

    let symbol = "";
    let change = "pos";
    let diff = 0;

    let stocks = Object.values(this.props.stocks)[0];
    if (Object.values(stocks).length) {
      diff = (
        stocks.meta?.regularMarketPrice - stocks.meta?.chartPreviousClose
      ).toFixed(2);
      if (diff > 0) {
        symbol = "+";
        change = "pos";
      } else {
        change = "neg";
      }
    }

    return (
      <div className="user-home-graph-container">
        {Object.values(stocks).length ? (
          <div className="user-home-graph-wrapper">
            <span className="company-name">
              {"TEMP LONG NAME PLACE HOLDER"} ({stocks.meta.symbol})
            </span>
            <span className="current-price">
              ${stocks.meta?.regularMarketPrice}
            </span>
            <span className={`${change}-prev-close`}>
              {symbol}
              {diff}
            </span>
            <div className="graph-div">{this.mapCharts()}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default UserHomeGraph;
