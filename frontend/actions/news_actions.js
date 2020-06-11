import * as NewsAPIUtil from "../util/news_api_util";

export const RECEIVE_NEWS = 'RECEIVE_NEWS';

export const receiveNews = (news) => {
  return {
    type: RECEIVE_NEWS,
    news
  }
};

export const displayNews = () => dispatch => {
  return NewsAPIUtil.receiveNews()
    .then(news => dispatch(receiveNews(news)))
}