//
// mockImplementationOnce vs mockImplementation / jst.clearAllMocks (maintains mock state)
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { mockCurrentUser, mockNews, mockStocks } from "../__mocks__/test_utils";

import UserHomeNews from "./user_home_news";

// test('description of whats to be done', () => {
//   expect(1).toBe(1);
// });

describe("Test news compponent mapping", () => {
  const mockFn = jest.fn();

  // jest
  //   .spyOn(React, 'useState')
  //   .mockImplementationOnce(initState => [initState, setState]);

  const { queryAllByTestId, queryAllByRole } = render(
    <UserHomeNews stocks={mockStocks} news={mockNews} getNews={mockFn} />,
  );

  const articles = queryAllByTestId("news-", { exact: false });
  const newsImages = queryAllByRole("img", { hidden: true });

  test("MapNews articles lists the currect count", () => {
    expect(articles).toHaveLength(3);
  });

  test("Images will appear only if img url is available", () => {
    expect(newsImages).toHaveLength(2);
  });
});
