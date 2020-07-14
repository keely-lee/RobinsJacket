import React from 'react';
import WatchlistComp from './watchlist_comp'
import UserHomeNav from './user_home_nav';
import UserHomeGraph from './user_home_graph';
import UserHomeNews from './user_home_news';

class UserHome extends React.Component {
  constructor(props){
    super(props)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount(){

  }

  updateUser(){
    let stock = this.props.stocks.quote;
    this.props.createWatch({ ticker: stock.symbol, company_name: stock.companyName })
      .then(res => {
        console.log(res);
        console.log("I AM RES")
      })
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
          { console.log(stocks.quote) }
          { console.log("RENDER HOME") }
          { stocks.quote ? (
            // (currentUser.watched_stocks.filter(stock => stock.ticker === stocks.quote.symbol)) ? null : (
            //   <button type="button" className="add-watchlist" onClick={this.updateUser}>
            //     Add to watchlist
            //   </button> 
            currentUser.watched_stocks.filter(stock => console.log(stock.ticker))
            // console.log(currentUser.watched_stocks) 
          ) : null }
          {// )) : null } 
          }
        </section>
        <section>
          <UserHomeNews 
            news={this.props.news} 
            getNews={this.props.getNews}/>
            {/* BONUS: Add getStock for stock specific news */}
        </section>
        <aside>
          <WatchlistComp
            currentUser={currentUser}
            deleteWatch={this.props.deleteWatch}/>
        </aside>
      </div>
    )
  }


}

export default UserHome;