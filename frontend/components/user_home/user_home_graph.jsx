import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  linearGradient,
} from "recharts";

class UserHomeGraph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.mapCharts = this.mapCharts.bind(this);
    this.__mapData__ = this.__mapData__.bind(this);
  }

  __mapData__() {
    const data = Object.values(this.props.stocks)[0];
    const historic = data?.timestamp || [];
    const mappedData = historic.map((dt, idx) => {
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

  render() {
    const stock = Object.values(this.props.stocks)[0];
    if (!stock?.meta) return null;

    const { symbol, regularMarketPrice, chartPreviousClose } = stock.meta;

    let sign = "";
    let change = "pos";
    let diff = 0;

    diff = (regularMarketPrice - chartPreviousClose).toFixed(2);
    if (diff > 0) {
      sign = "+";
      change = "pos";
    } else {
      change = "neg";
    }

    // TEMP fix for company name, need diff endpoint
    const name = this.props.news?.quotes?.[0]?.shortname || "";
    return (
      <div className="user-home-graph-container">
        {stock ? (
          <div className="user-home-graph-wrapper">
            <span className="company-name">
              {name} ({symbol})
            </span>
            <span className="current-price">${regularMarketPrice}</span>
            <span className={`${change}-prev-close`}>
              {sign}
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
