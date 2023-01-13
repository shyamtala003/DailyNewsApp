import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsContainer extends Component {
  render() {
    return (
      <div className="mx-6 mt-20 md:mt-28 grid max-w-[100vw] overflow-x-hidden  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    );
  }
}

export default NewsContainer;
