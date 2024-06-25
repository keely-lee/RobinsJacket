// Mocks for Jest Tests

import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from '../../store/store';

// export const renderWithProviders = ({}) => {

// }

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configStore(preloadedState),
    // Automatically create a store instance if no store was passed in
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}><HashRouter>{children}</HashRouter></Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export function renderUserWithProviders(ui, ...renderOptions){
  const preloadedState = {
    entities: { users: { [mockCurrentUser.id]: mockCurrentUser } },
    session: { currentUserId: mockCurrentUser.id },
  };
  
  return renderWithProviders(ui, {preloadedState}, ...renderOptions)
}

export const mockWatchlist = [
  {
    'company_name': 'Apple, Inc.',
    'id': 1,
    'ticker': 'AAPL'
  },
  {
    'company_name': 'Microsoft Corp.',
    'id': 2,
    'ticker': 'MSFT'
  },
  {
    'company_name': 'Amazon.com Inc.',
    'id': 3,
    'ticker': 'AMZN'
  },
];

export const mockNews = {
  data: {
    main: {
      stream: [
        {
          id: 1,
          content: {
            clickThroughUrl: {
              url: 'https://www.mockurl.com'
            },
            pubDate: '01/04/2000',
            provider: {
              displayName: 'NY Times',
            },
            title: 'Mock Stock News 1',
            thumbnail: {
              resolutions: [
                {
                  url: 'mockimgurl.com'
                }
              ]
            }
          }
        },
        {
          id: 2,
          content: {
            pubDate: 'Dec 25, 2020',
            provider: {
              displayName: 'BBC News',
            },
            title: 'Mock Stock News 2 - No Thumbnail',
          }
        },
        {
          id: 3,
          content: {
            clickThroughUrl: {
              url: 'https://www.finance.yahoo.com'
            },
            pubDate: '01/01/2000',
            provider: {
              displayName: 'Yahoo Finance',
            },
            title: 'Mock Stock News 3',
            thumbnail: {
              resolutions: [
                {
                  url: 'yahooimgurl.com'
                }
              ]
            }
          }
        },
      ]
    }
  }
};

export const mockCurrentUser = { 
  'id': 1,
  'fname': 'Rick',
  'lname': 'Sanchez',
  'email': 'randm@hulu.com',
  'funds_available': 1000000,
  'watched_stocks': mockWatchlist,
  'portfolio': { id: 1, user_id: 1 }, // create mock portfolio
};

export const mockStocks = {
  
}


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
