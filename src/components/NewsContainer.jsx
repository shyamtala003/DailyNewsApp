import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      page: 1,
      loading: false,
      prevBtnDisplay: false,
      nextBtnDisplay: true,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9b1de695cba64b559c7edc7ff635a692&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let dataJson = await data.json();
    this.setState({
      article: dataJson.articles,
      totalResults: dataJson.totalResults,
      prevBtnDisplay: false,
      nextBtnDisplay:
        this.state.page + 1 >=
        Math.ceil(this.state.totalResults / this.props.pageSize)
          ? false
          : true,
    });
    console.log(dataJson);
  }

  handleNext = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.setState({
        nextBtnDisplay: false,
        prevBtnDisplay: true,
      });
      window.scrollTo(0, 0);
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9b1de695cba64b559c7edc7ff635a692&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let dataJson = await data.json();
      this.setState({
        page: this.state.page + 1,
        article: dataJson.articles,
        prevBtnDisplay: true,
        nextBtnDisplay:
          this.state.page + 1 >=
          Math.ceil(this.state.totalResults / this.props.pageSize)
            ? false
            : true,
      });
      window.scrollTo(0, 0);
    }
  };

  handlePrevious = async () => {
    if (this.state.page <= 1) {
      this.setState({
        prevBtnDisplay: false,
        nextBtnDisplay: true,
      });
      window.scrollTo(0, 0);
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9b1de695cba64b559c7edc7ff635a692&page=${
        this.state.page - 1
      }&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let dataJson = await data.json();
      this.setState({
        page: this.state.page - 1,
        article: dataJson.articles,
        nextBtnDisplay: true,
        prevBtnDisplay: this.state.page <= 1 ? false : true,
      });
      window.scrollTo(0, 0);
    }
  };

  render() {
    return (
      <>
        <h1 className="text-3xl text-center mt-20 md:mt-28 text-white">
          DailyNews - Top Headlines
        </h1>
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
              />
            );
          })}
        </div>

        <div className="flex w-full items-center justify-around">
          {this.state.prevBtnDisplay === true && (
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
          )}

          {this.state.nextBtnDisplay === true && (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={this.handleNext}
            >
              &rarr; Next
            </button>
          )}
        </div>
      </>
    );
  }
}

export default NewsContainer;
