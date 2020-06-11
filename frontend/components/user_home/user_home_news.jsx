import React from 'react';
import news from './user_home_news_temp'

class UserHomeNews extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.getNews(); //NOT NEEDED FOR STATIC DATA
  }

  mapNews(){
    if(Object.values(this.props.news).length) { //NOT NEEDED FOR STATIC DATA
      const articles = news.articles;
      // let summary;

      return (
        articles.map((article, idx) => (
          <div className="user-news-div" key={`div1-${idx}`}>
            <a href={article.url} className={`news-a-${idx}`} key={`a-${idx}`}>
              <div className="user-inner-news-div" key={`div2-${idx}`}>
                <section className="user-news-left" key={`sec1-${idx}`}>
                  <h6 className={`source-name-${idx}`} key={`name-${idx}`}>{article.source.name}</h6>
                  <h6 className={`news-title-${idx}`} key={`title-${idx}`}>{article.title}</h6>

                  <span className={`news-des-${idx}`} key={`des-${idx}`}>{article.description}</span>

                </section>
                <section className="user-news-right" key={`sec2-${idx}`}>
                  {/* <a href={article.url} className={`news-img-${idx}`} key={`img-${idx}`}>...</a> */}
                  <img src={article.urlToImage} className={`news-pic-${idx}`} key={`src-${idx}`} draggable="false"/>
                </section>
              </div>
            </a>
          </div>



//FREE IEX API
        // Object.values(articles).map((article, idx) => {
          // return (
            // <div className="user-news-div" key={`div1-${idx}`}>
            //   {/* <a href={article.url} className={`news-a-${idx}`} key={`a-${idx}`}> */}
            //   <div className="user-inner-news-div" key={`div2-${idx}`}>
            //     <section className="user-news-left" key={`sec1-${idx}`}>
            //       <h6 className={`source-name-${idx}`} key={`name-${idx}`}>{article.source}</h6>
            //       <h6 className={`news-title-${idx}`} key={`title-${idx}`}>{article.headline}</h6>

            //       {(article.summary.length > 200) ? (
            //         summary = article.summary.substring(0, 200) + '...'
            //       ) : summary = article.summary}
            //       <span className={`news-des-${idx}`} key={`des-${idx}`}>{summary}</span>

            //     </section>
            //     <section className="user-news-right" key={`sec2-${idx}`}>
            //       {/* <a href={article.url} className={`news-img-${idx}`} key={`img-${idx}`}>...</a> */}
            //       {/* <img src={article.imageUrl} className={`news-pic-${idx}`} key={`src-${idx}`} draggable="false"/> */}
            //     </section>
            //   </div>
            //   {/* </a> */}
            // </div>

        //   )
        // })
      )))
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