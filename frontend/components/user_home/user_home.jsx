import React from 'react';
import WatchlistComp from './watchlist_comp'

class UserHome extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <aside>
          <WatchlistComp />
        </aside>
      </div>
    )
  }


}

export default UserHome;