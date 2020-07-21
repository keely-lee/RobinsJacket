import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import StocksReducer from "./stocks_reducer";
import newsReducer from "./news_reducer";
import PortfoliosReducer from "./portfolios_reducer";

const entitiesReducer = combineReducers({
  users: UsersReducer,
  stocks: StocksReducer,
  news: newsReducer,
  portfolios: PortfoliosReducer,
});

export default entitiesReducer;