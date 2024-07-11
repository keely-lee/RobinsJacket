import React from "react";
import { cleanup, waitFor } from "@testing-library/react";
import {
  renderWithProviders,
  renderUserWithProviders,
  mockStock,
  mockStocksMultiple,
  mockNews,
  rechartWrap,
} from "../__mocks__/test_utils";
import GreetingContainer from "./GreetingContainer";
import * as stockApiUtil from "../../util/stock_api_util";
import * as newsApiUtil from "../../util/news_api_util";

afterEach(cleanup);

describe("Test for proper auth routing", () => {
  test("Receive splash container if no current user", () => {
    const { getByText } = renderWithProviders(<GreetingContainer />);
    expect(
      getByText(/infinite ways to make your money work for you/),
    ).toBeTruthy();
  });

  test("Receive user home container if current user", async () => {
    rechartWrap();

    const mockReceiveStocks = jest.spyOn(stockApiUtil, "receiveStocks");
    const mockResponse = { "quoteResponse": {
      "result": Object.values(mockStocksMultiple)
    }};
    mockReceiveStocks.mockResolvedValue(mockResponse);

    const mockReceiveStock = jest.spyOn(stockApiUtil, "receiveStock");
    mockReceiveStock.mockResolvedValue({"chart": { "result": Object.values(mockStock) } });

    const mockReceiveNews = jest.spyOn(newsApiUtil, "receiveNews");
    mockReceiveNews.mockResolvedValue(mockNews)

    const { queryByText } = renderUserWithProviders(<GreetingContainer />);

    await waitFor(() =>
      expect(
        queryByText(/infinite ways to make your money work for you/),
      ).not.toBeTruthy(),
    );
    await waitFor(() =>
      expect(queryByText(/Welcome to RobinsJacket/)).toBeTruthy(),
    );
  });
});
