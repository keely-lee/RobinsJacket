import React from 'react';
import WatchlistComp from './watchlist_comp'
import UserHomeNav from './user_home_nav';
import UserHomeGraph from './user_home_graph';
import UserHomeNews from './user_home_news';

class UserHome extends React.Component {
  constructor(props){
    super(props)
    this.state = { watched: false }

    this.updateUser = this.updateUser.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
  }

  // componentDidMount(){
  //   console.log(this.props.stocks)
  //   console.log("STOCKS - USERHOME")
  //   // this.props.getStock("AAPL")
  // }

  componentDidUpdate(prevProps){
    if (prevProps.stocks !== this.props.stocks || prevProps.currentUser.watched_stocks !== this.props.currentUser.watched_stocks){
      this.toggleButton()
    }
    console.log(prevProps)
    console.log("prevProps")
  }

  updateUser(){
    let stock = this.props.stocks[Object.keys(this.props.stocks)[0]].quote;
    this.props.createWatch({ ticker: stock.symbol, company_name: stock.companyName })
      .fail((err) => console.log(err.responseJSON[0]))
  }

  toggleButton(){
    let watching = this.props.currentUser.watched_stocks.some( obj => obj.ticker === this.props.stocks[Object.keys(this.props.stocks)[0]].quote.symbol )
    if (watching) this.setState({ watched: true })
    else this.setState({ watched: false })
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
        
        <h2>Welcome to RobinsJacket!</h2>

        <section>
          <UserHomeGraph 
            currentUser={currentUser}
            stocks={stocks} 
            getStock={getStock}
            createWatch={this.props.createWatch}/>
          { !this.state.watched ? (
            <button type="button" className="add-watchlist" onClick={this.updateUser}>
              Add to watchlist
            </button> 
          ) : null }
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