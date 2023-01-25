import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
class NewsContainer extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 4,
    category: "general",
    page: 1,
  };
  constructor() {
    super();
    this.state = {
      article: [],
      page: 1,
    };
  }

  async updateNews() {
    this.props.SetProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b1de695cba64b559c7edc7ff635a692&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.SetProgress(50);
    let dataJson = await data.json();
    this.setState({
      article: dataJson.articles,
      totalResults: dataJson.totalResults,
    });
    document.title =
      String(this.props.category).slice(0, 1).toUpperCase() +
      String(this.props.category).slice(1);
    this.props.SetProgress(100);
    window.scroll(0, 0);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b1de695cba64b559c7edc7ff635a692&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let dataJson = await data.json();

    this.setState({
      article: this.state.article.concat(dataJson.articles),
      totalResults: dataJson.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-2xl md:text-3xl text-center capitalize mt-20 md:mt-28 text-white">
          DailyNews - Top {this.props.category} Headlines
        </h1>

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.article.length <= this.state.totalResults ? true : false
          }
          loader={<Loading />}
        >
          <div className="mx-6 my-8  grid justify-items-center max-w-[100vw] overflow-x-hidden  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-8">
            {this.state.article.map((el) => {
              return (
                <NewsItem
                  key={el.url}
                  title={el.title}
                  description={
                    el.description === null
                      ? "sorry! news description is not available to show"
                      : el.description
                  }
                  imageUrl={
                    el.urlToImage === null
                      ? "https://thumbs.dreamstime.com/b/thin-line-flat-design-banner-news-web-page-information-events-activities-recent-company-information-modern-vector-67016502.jpg"
                      : el.urlToImage
                  }
                  url={el.url}
                  publishedDate={el.publishedAt}
                  author={el.author}
                  source={el.source.name}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

// define default props and props type
NewsContainer.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default NewsContainer;
