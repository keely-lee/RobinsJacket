import * as NewsAPIUtil from "../util/news_api_util";

export const RECEIVE_NEWS = "RECEIVE_NEWS";
export const CLEAR_NEWS = "CLEAR_NEWS";

export const receiveNews = (news) => ({
  type: RECEIVE_NEWS,
  news,
});

export const clearNews = () => ({ type: CLEAR_NEWS })

export const displayNews = (ticker, snippetCount) => (dispatch) => {
  return NewsAPIUtil.receiveNews(ticker, snippetCount).then((news) =>
    dispatch(receiveNews(news)),
  );
};

