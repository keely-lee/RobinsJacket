import React from 'react';
import WatchlistComp from './watchlist_comp'
import UserHomeNav from './user_home_nav';
import UserHomeGraph from './user_home_graph';

class UserHome extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="user-home-main">
        <nav>
          <UserHomeNav currentUser={this.props.currentUser} logout={this.props.logout} getStock={this.props.getStock}/>
        </nav>
        <section>
          <UserHomeGraph stocks={this.props.stocks} getStock={this.props.getStock}/>
        </section>
        <aside>
          <WatchlistComp/>
        </aside>
      </div>
    )
  }


}

export default UserHome;