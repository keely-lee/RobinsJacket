import { RECEIVE_NEWS } from "../actions/news_actions";

const NewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_NEWS:
      newState = Object.assign({}, oldState, action.news);
      return newState;
    default:
      return oldState;
  };
}

export default NewsReducer;