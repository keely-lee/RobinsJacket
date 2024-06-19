//
// mockImplementationOnce vs mockImplementation / jst.clearAllMocks (maintains mock state)
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import UserHomeNews from './user_home_news';

// test('description of whats to be done', () => {
//   expect(1).toBe(1);
// });

describe('Test news compponent mapping', () => {
  const mockFn = jest.fn();
  const mockWatchlist = [
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
  const mockNews = {
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
  const mockCurrentUser = { // move all to shared 
    'id': 1,
    'fname': 'Rick',
    'lname': 'Sanchez',
    'email': 'randm_@hulu.com',
    'funds_available': 1000000,
    'watched_stocks': mockWatchlist,
    'portfolio': { id: 1, user_id: 1 }, // create mock portfolio
  };

  // jest
  //   .spyOn(React, 'useState')
  //   .mockImplementationOnce(initState => [initState, setState]);

  const {queryAllByTestId, queryAllByRole} = render(
    <UserHomeNews stocks={mockCurrentUser} news={mockNews} getNews={mockFn} />
  );

  const articles = queryAllByTestId('news-', {exact: false})
  const newsImages =  queryAllByRole('img', {hidden: true});

  test('MapNews articles lists the currect count', () => {
    expect(articles).toHaveLength(3);
  });

  test('Images will appear only if img url is available', () => {
    expect(newsImages).toHaveLength(2);
  });
})
