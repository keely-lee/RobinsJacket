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

    this.updateUser = this.updateUser.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.stocks !== this.props.stocks ||
      prevProps.currentUser.watched_stocks !==
        this.props.currentUser.watched_stocks
    ) {
      this.toggleButton();
    }
  }

  updateUser() {
    let stock = this.props.stocks[Object.keys(this.props.stocks)[0]];
    debugger;
    this.props
      .createWatch({ ticker: stock.symbol, company_name: stock.price.longName })
      .fail((err) => console.log(err.responseJSON[0]));
  }

  toggleButton() {
    let watching = this.props.currentUser.watched_stocks.some(
      (obj) =>
        obj.ticker ===
        this.props.stocks[Object.keys(this.props.stocks)[0]].symbol,
    );
    if (watching) this.setState({ watched: true });
    else this.setState({ watched: false });
  }

  render() {
    const currentUser = this.props.currentUser;
    const getStock = this.props.getStock;
    const stocks = this.props.stocks;

    return (
      <div className="user-home-main">
        <nav>
          <UserHomeNav
            currentUser={currentUser}
            ownProps={this.props.ownProps}
            logout={this.props.logout}
            getStock={getStock}
          />
        </nav>

        <h2>Welcome to RobinsJacket!</h2>

        <section>
          <UserHomeGraph
            currentUser={currentUser}
            stocks={stocks}
            getStock={getStock}
          />
          {/* createWatch={this.props.createWatch}/> */}
          {!this.state.watched ? (
            <button
              type="button"
              className="add-watchlist"
              onClick={this.updateUser}
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
          <UserHomeNews news={this.props.news} getNews={this.props.getNews} />
          {/* BONUS: Add getStock for stock specific news */}
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
