// Mocks for Jest Tests

import React from "react";
import { render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configStore from "../../store/store";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configStore(preloadedState),
    // Automatically create a store instance if no store was passed in
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <HashRouter>{children}</HashRouter>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderUserWithProviders(ui, ...renderOptions) {
  const preloadedState = {
    entities: { users: { [mockCurrentUser.id]: mockCurrentUser } },
    session: { currentUserId: mockCurrentUser.id },
  };

  return renderWithProviders(ui, { preloadedState }, ...renderOptions);
}

export const mockWatchlist = [
  {
    company_name: "Apple, Inc.",
    id: 1,
    ticker: "AAPL",
  },
  {
    company_name: "Microsoft Corp.",
    id: 2,
    ticker: "MSFT",
  },
  {
    company_name: "Amazon.com Inc.",
    id: 3,
    ticker: "AMZN",
  },
];

export const mockCurrentUser = {
  id: 1,
  fname: "Rick",
  lname: "Sanchez",
  email: "randm@hulu.com",
  funds_available: 1000000,
  watched_stocks: mockWatchlist,
  portfolio: { id: 1, user_id: 1 }, // Need to create mock portfolio
};

// stock specific news
export const mockNews = {
  quotes: [
    {
      exchange: "NMS",
      shortname: "Tesla, Inc.",
      symbol: "TSLA",
      longname: "Tesla, Inc.",
    },
  ],
  news: [
    {
      uuid: 1,
      title: "Mock Stock News 1",
      providerPublishTime: 1720709158,
      publisher: "NY Times",
      link: "https://www.mockurl.com",
      thumbnail: {
        resolutions: [
          {
            url: "mockimgurl.com",
            width: 2000,
            height: 1500,
          },
        ],
      },
      relatedTickers: ["TSLA"],
    },
    {
      uuid: 2,
      title: "Mock Stock News 2 - No Thumbnail",
      providerPublishTime: 1720714197,
      publisher: "BBC News",
      link: "https://www.bbc.com/news",
    },
    {
      uuid: 3,
      title: "Mock Stock News 3",
      providerPublishTime: 1720679581,
      link: "https://www.finance.yahoo.com",
      publisher: "Yahoo Finance",
      thumbnail: {
        resolutions: [
          {
            url: "yahooimgurl.com",
          },
        ],
      },
    },
  ],
};

export const mockStock = {
  IBM: {
    indicators: {
      quote: [
        {
          volume: [
            2951300, 3522700, 3525700, 2777700, 3239800, 3239800, 3386400,
            3386400, 4723100, 4723100, 10182000, 10182000, 4864700, 4864700,
            4119300, 4119300, 2779000, 2779000, 2894000, 2894000, 4193300,
            4193300, 3321000, 3321000, 2883300, 2883300, 1649000, 1649000,
            2086000, 2086000, 2503000, 2503000, 2512700, 2512700, 3461500,
            3461500, 1832488,
          ],
          low: [
            166.80999755859375, 168.10000610351562, 168.33999633789062,
            167.22999572753906, 167.5, 168.3800048828125, 171.22000122070312,
            171.39999389648438, 174.14999389648438, 171.4199981689453,
            170.41000366210938, 170.47999572753906, 170.52999877929688,
            173.3800048828125, 174.32000732421875, 175.1699981689453,
            173.9499969482422, 176.00999450683594, 175.5800018310547,
            174.4499969482422, 176.6199951171875,
          ],
          open: [
            169.97999572753906, 171.35000610351562, 169.00999450683594,
            168.2899932861328, 168.75999450683594, 170, 174.0800018310547,
            173.97000122070312, 175, 175.13999938964844, 171.27999877929688,
            171.1199951171875, 170.85000610351562, 173.4499969482422,
            174.83999633789062, 177.8800048828125, 175.74000549316406,
            176.41000366210938, 177.60000610351562, 176.60000610351562,
            177.64999389648438,
          ],
          close: [
            169.32000732421875, 169, 169.1199951171875, 169.2100067138672,
            169.5, 170.5500030517578, 173.9199981689453, 172.4600067138672,
            175.00999450683594, 172.60000610351562, 171.8699951171875,
            170.85000610351562, 172.9499969482422, 175.10000610351562,
            177.3000030517578, 175.72999572753906, 176.02000427246094,
            177.63999938964844, 176.47999572753906, 177.83999633789062,
            178.2100067138672,
          ],
          high: [
            170, 172.47000122070312, 169.58999633789062, 169.47000122070312,
            169.72000122070312, 170.75, 174.27999877929688, 174.9600067138672,
            178.4600067138672, 175.75, 172.67999267578125, 172.5,
            173.4600067138672, 176.4600067138672, 177.49000549316406,
            177.97999572753906, 176.08999633789062, 178.58999633789062,
            177.6999969482422, 178.22000122070312, 179.4199981689453,
          ],
        },
      ],
      adjclose: [
        {
          adjclose: [
            169.32000732421875, 169, 169.1199951171875, 169.2100067138672,
            169.5, 170.5500030517578, 173.9199981689453, 172.4600067138672,
            175.00999450683594, 172.60000610351562, 171.8699951171875,
            170.85000610351562, 172.9499969482422, 175.10000610351562,
            177.3000030517578, 175.72999572753906, 176.02000427246094,
            177.63999938964844, 176.47999572753906, 177.83999633789062,
            178.2100067138672,
          ],
        },
      ],
    },
    meta: {
      currency: "USD",
      symbol: "IBM",
      fullExchangeName: "NYSE",
      instrumentType: "EQUITY",
      timezone: "EDT",
      regularMarketPrice: 178.21,
      fiftyTwoWeekHigh: 179.42,
      fiftyTwoWeekLow: 176.62,
      regularMarketDayHigh: 179.42,
      regularMarketDayLow: 176.62,
      regularMarketVolume: 1832488,
      chartPreviousClose: 169.32,
      range: "1mo",
      validRanges: [],
    },
    timestamp: [
      1718112600, 1718199000, 1718285400, 1718371800, 1718631000, 1718717400,
      1718890200, 1718976600, 1719235800, 1719322200, 1719408600, 1719495000,
      1719581400, 1719840600, 1719927000, 1720013400, 1720186200, 1720445400,
      1720531800, 1720618200, 1720726151,
    ],
  },
};

// redux state after being formatted
export const mockStocksMultiple = {
  AAPL: {
    region: "US",
    currency: "USD",
    marketCap: 3489581236224,
    regularMarketPrice: 227.57,
    regularMarketPreviousClose: 232.98,
    shortName: "Apple Inc.",
    longName: "Apple Inc.",
    regularMarketOpen: 231.39,
    symbol: "AAPL",
  },
  AMZN: {
    marketCap: 2029807337472,
    regularMarketPrice: 195.05,
    regularMarketPreviousClose: 199.79,
    shortName: "Amazon.com, Inc.",
    symbol: "AMZN",
  },
  FB: {
    region: "US",
    symbol: "FB",
  },
  MSFT: {
    marketCap: 3379471319040,
    regularMarketPrice: 454.7,
    regularMarketPreviousClose: 466.25,
    shortName: "Microsoft Corporation",
    symbol: "MSFT",
  },
  NFLX: {
    marketCap: 281270616064,
    regularMarketPrice: 652.75,
    regularMarketPreviousClose: 677.65,
    shortName: "Netflix, Inc.",
    symbol: "NFLX",
  },
  TSLA: {
    marketCap: 768692846592,
    regularMarketPrice: 241.03,
    regularMarketPreviousClose: 263.26,
    shortName: "Tesla, Inc.",
    symbol: "TSLA",
  },
};

// For recharts
export const rechartWrap = () =>
  (global.ResizeObserver = jest.fn().mockImplementation(() => {
    return {
      observe: jest.fn(),
      disconnect: jest.fn(),
      unobserve: jest.fn(),
    };
  }));

// jest.mock("../user_home/watchlist_comp.jsx", () => ({
//   // __esModule: true,
//   // default: jest.fn(),
//   // receiveStocks: jest.fn().mockImplementation(() => {
//   //   const fakeResponse = {
//   //     id: 1,
//   //     name: "All",
//   //     value: "Dummy Data"
//   //   };
//   //   return Promise.resolve(fakeResponse)
//   // }),
//   receiveStocks: jest.fn(() => Promise.resolve(mockStocks)),
//   grabTickers: jest.fn()
// }));
