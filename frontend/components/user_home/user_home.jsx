import React from "react";
import { Link } from "react-router-dom";
import WatchlistComp from "./watchlist_comp";
import UserHomeNav from "./user_home_nav";
import UserHomeGraph from "./user_home_graph";
import UserHomeNews from "./user_home_news";

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { watched: false };

    this.handleNavSearch = this.handleNavSearch.bind(this);
    this.handleWatch = this.handleWatch.bind(this);
    this.toggleWatchButton = this.toggleWatchButton.bind(this);
  }

  componentDidMount() {
    // UPDATE TO PREVIOUS/TOP MARKET vs NDAQ?
    this.props.getStock('NDAQ');
    this.props.getNews('NDAQ');
  }

  componentDidUpdate(prevProps) {
    // TODO KL: optimize this
    if (
      prevProps.stocks !== this.props.stocks ||
      prevProps.currentUser.watched_stocks !==
      this.props.currentUser.watched_stocks
      ) {
      this.toggleWatchButton();
    }
  }

  handleNavSearch(input) {
    // add error handling
    this.props.getStock(input);
    this.props.getNews(input);
  }

  handleWatch() {
    // TODO KL: temporary fix for stock name, need a diff stock api
    const companyName = this.props.news.news?.quotes?.[0]?.shortname || "";
    this.props.createWatch({ ticker: Object.keys(this.props.stocks)[0], company_name: companyName })
      .fail((err) => console.log(err.responseJSON[0]));
  }

  toggleWatchButton() {
    // TODO KL: eventually modify watched for a faster search option. Used by this & watchlist
    const watching = this.props.currentUser.watched_stocks.some(
      ({ ticker }) => ticker === Object.keys(this.props.stocks)[0]
    );
    this.setState({ watched: watching });
  }

  render() {
    const currentUser = this.props.currentUser;
    const stocks = this.props.stocks;

    return (
      <div className="user-home-main">
        <nav>
          <UserHomeNav
            currentUser={currentUser}
            logout={this.props.logout}
            getStock={this.handleNavSearch}
          />
        </nav>

        <h2>Welcome to RobinsJacket!</h2>

        <section>
          {/* Remove news when new endpoint has company name */}
          <UserHomeGraph stocks={stocks} news={this.props.news}/>
          {!this.state.watched ? (
            <button
              type="button"
              className="add-watchlist"
              onClick={this.handleWatch}
            >
              Add to watchlist
            </button>
          ) : null}
          <Link
            to={`/stock/${Object.keys(stocks)[0]}`}
            className="user-home-trade-link"
          >
            TRADE
          </Link>
        </section>
        <section>
          <UserHomeNews news={this.props.news}/>
        </section>
        <aside>
          <WatchlistComp
            currentUser={currentUser}
            deleteWatch={this.props.deleteWatch}
          />
        </aside>
      </div>
    );
  }
}

export default UserHome;
