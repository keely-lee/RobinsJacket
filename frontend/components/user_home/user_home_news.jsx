import React from 'react';

class UserHomeNews extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidUpdate(prevProps){
    if (prevProps.stocks !== this.props.stocks) {
      const ticker = Object.keys(this.props.stocks);
      this.props.getNews(ticker[0]); 
    }
  }

  // TODO: Add pagination
  mapNews(){
    if (this.props.news.data) {
      const news = this.props.news.data.main.stream
      return news.map((article, _idx) => {
        const {id, content} = article;
        return (
          <div className="user-news-div" key={`div1-${id}`}>
            <a href={content.clickThroughUrl?.url} className={`news-a-${id}`} key={`a-${id}`}>
              <div className="user-inner-news-div" key={`div2-${id}`}>
                <section className="user-news-left" key={`sec1-${id}`}>
                  <h6 className={`news-date-${id}`} key={`date-${id}`}>{new Date(content.pubDate).toDateString()}</h6>
                  <h6 className={`source-name-${id}`} key={`name-${id}`}>{content.provider.displayName}</h6>
                  <h5 className={`news-title-${id}`} key={`title-${id}`}>{content.title}</h5>
                  {/* <span className={`news-des-${id}`} key={`des-${id}`}>{content.description}</span> */}
                </section>

                { content.thumbnail ? (
                  <section className="user-news-right" key={`sec2-${id}`}>
                    <img src={content.thumbnail.resolutions[0].url} className={`news-pic-${id}`} key={`src-${id}`} draggable="false"/>
                  </section>
                ) : null }
              </div>
            </a>
          </div>
        )
      })
    }
  }

  render(){
    return (
      <div className="user-home-news-container">
        <h1>News</h1>
        {this.mapNews()}
      </div>
    )
  }

}

export default UserHomeNews;