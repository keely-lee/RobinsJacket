import React from 'react';
import WatchlistComp from './watchlist_comp'
import UserHomeNav from './user_home_nav';
import UserHomeGraph from './user_home_graph';
import UserHomeNews from './user_home_news';

class UserHome extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const currentUser = this.props.currentUser;
    // const getStocks = this.props.getStocks;
    const getStock = this.props.getStock;
    const stocks = this.props.stocks

    return (
      <div className="user-home-main">
        <nav>
          <UserHomeNav 
            currentUser={currentUser} 
            logout={this.props.logout} 
            getStock={getStock}/>
        </nav>
        <section>
          <UserHomeGraph 
            stocks={stocks} 
            getStock={getStock}/>
        </section>
        <section>
          <UserHomeNews 
            news={this.props.news} 
            getNews={this.props.getNews}/>
            {/* BONUS: Add getStock for stock specific news */}
        </section>
        <aside>
          <WatchlistComp
            stocks={stocks}
            currentUser={currentUser}
            getStocks={this.props.getStocks}
            update={this.props.update}/>
        </aside>
      </div>
    )
  }


}

export default UserHome;