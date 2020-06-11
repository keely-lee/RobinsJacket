import React from 'react';

class UserHomeNews extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.getNews();
  }

  mapNews(){
    if(Object.values(this.props.news).length) {
      const articles = this.props.news.articles;

      return (
        articles.map((article, idx) => (
          <div className="user-news-div">
            <h6 key={`source-name-${idx}`}>{article.source.name}</h6>
            <a href={article.url}>...</a>
            <h6 key={`news-title-${idx}`}>{article.title}</h6>
            <span key={`news-des-${idx}`}>{article.description}</span>
            <img src={article.urlToImage} key={`news-pic-${idx}`}draggable="false"/>
            
            {/* // article.source.name
            // article.title,
            // article.description
            // article.url
            // article.urlToImage */}
          </div>
        ))
      )
    }
  }

  render(){
    return (
      <div className="user-home-news-container">
        {this.mapNews()}
      </div>
    )
  }

}

export default UserHomeNews;