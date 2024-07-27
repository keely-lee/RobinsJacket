import React from "react";

class UserHomeNews extends React.PureComponent {
  constructor(props) {
    super(props);

    this.mapNews = this.mapNews.bind(this);
  }

  // BONUS: Add pagination
  mapNews() {
    const news = this.props.news.news || [];
    return news.map((article, _idx) => {
      const { uuid, title, publisher, link, providerPublishTime, thumbnail } =
        article;
      return (
        <div
          className="user-news-div"
          key={`div1-${uuid}`}
          data-testid={`news-${uuid}`}
        >
          <a href={link} className={`news-a-${uuid}`} key={`a-${uuid}`}>
            <div className="user-inner-news-div" key={`div2-${uuid}`}>
              <section className="user-news-left" key={`sec1-${uuid}`}>
                <h6 className={`news-date-${uuid}`} key={`date-${uuid}`}>
                  {/* date -> epoch timestamp in seconds */}
                  {new Date(providerPublishTime * 1000).toDateString("en-US")}
                </h6>
                <h6 className={`source-name-${uuid}`} key={`name-${uuid}`}>
                  {publisher}
                </h6>
                <h5 className={`news-title-${uuid}`} key={`title-${uuid}`}>
                  {title}
                </h5>
                {/* <span className={`news-des-${uuid}`} key={`des-${uuid}`}>{description}</span> */}
              </section>

              {thumbnail ? (
                <section className="user-news-right" key={`sec2-${uuid}`}>
                  <img
                    src={thumbnail.resolutions[0].url}
                    className={`news-pic-${uuid}`}
                    key={`src-${uuid}`}
                    draggable="false"
                  />
                </section>
              ) : null}
            </div>
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="user-home-news-container">
        <h1>News</h1>
        {this.mapNews()}
      </div>
    );
  }
}

export default UserHomeNews;
