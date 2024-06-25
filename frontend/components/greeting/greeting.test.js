import React from 'react';
import { cleanup, waitFor } from '@testing-library/react';
import { renderWithProviders, renderUserWithProviders, mockStocks } from '../__mocks__/test_utils';
import GreetingContainer from './GreetingContainer';
import * as stockApiUtil from '../../util/stock_api_util';

afterEach(cleanup);

describe('Test for proper auth routing', () => {
  test('Receive splash container if no current user', () => {
    const { getByText } = renderWithProviders(<GreetingContainer/>);
    expect(getByText(/infinite ways to make your money work for you/)).toBeTruthy();
  });

  test('Receive user home container if current user', async () => {
    const mockReceiveStocks = jest.spyOn(stockApiUtil, 'receiveStocks');
    mockReceiveStocks.mockResolvedValue(mockStocks);
    const { queryByText } = renderUserWithProviders(<GreetingContainer/>);

    await waitFor(() => expect(queryByText(/infinite ways to make your money work for you/)).not.toBeTruthy());
    await waitFor(() => expect(queryByText(/Welcome to RobinsJacket/)).toBeTruthy());
  });
})
