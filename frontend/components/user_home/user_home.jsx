import React from 'react';
import WatchlistComp from './watchlist_comp'
import UserHomeNav from './user_home_nav';
import UserHomeGraph from './user_home_graph';
import UserHomeNews from './user_home_news';

class UserHome extends React.Component {
  constructor(props){
    super(props)
    this.updateUser = this.updateUser.bind(this)
    console.log(this.props.currentUser)
  }

  // componentDidUpdate(prevProps){
  //   if (this.props.currentUser.watchedStocks.length != prevProps.currentUser.watchedStocks.length){
      
  //   }
  // }

  updateUser(){
    let stock = this.props.stocks.quote;
    return this.props.createWatch({ ticker: stock.symbol, company_name: stock.companyName })
  }

  render(){
    const currentUser = this.props.currentUser;
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
            currentUser={currentUser}
            stocks={stocks} 
            getStock={getStock}
            update={this.props.update}
            createWatch={this.props.createWatch}
          />
          <button type="button" className="add-watchlist" onClick={this.updateUser}>
            Add to watchlist
          </button>
        </section>
        <section>
          <UserHomeNews 
            news={this.props.news} 
            getNews={this.props.getNews}/>
            {/* BONUS: Add getStock for stock specific news */}
        </section>
        <aside>
          <WatchlistComp
            currentUser={currentUser}/>
        </aside>
      </div>
    )
  }


}

export default UserHome;