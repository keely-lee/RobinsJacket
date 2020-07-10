import React from 'react';
import WatchlistComp from './watchlist_comp'
import UserHomeNav from './user_home_nav';
import UserHomeGraph from './user_home_graph';
import UserHomeNews from './user_home_news';

class UserHome extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      added: false,
      currentUser: this.props.currentUser,
    }

    this.updateUser = this.updateUser.bind(this)
  }

  // componentDidMount(){
  //   const watches = this.props.currentUser.watched_stocks;
  //   for (let i = 0; i < watches.length; i++) {
  //     // if (watches[i]["ticker"] === this.props.stocks.quote.symbol) {
  //       // return this.setState({added: true})
  //     // }
  //   }
  // }

  updateUser(){
    let stock = this.props.stocks.quote;
    this.setState({currentUser: this.props.currentUser})
    console.log("RENDERING IN UPDATE")
    return this.props.createWatch({ ticker: stock.symbol, company_name: stock.companyName })
  }

  render(){
    const currentUser = this.state.currentUser;
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
          { (!this.state.added) ?
            <button type="button" className="add-watchlist" onClick={this.updateUser}>
              Add to watchlist
            </button> 
          : null }
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