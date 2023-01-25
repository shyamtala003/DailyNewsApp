import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

let NewsContainer = ({ country, category, pageSize, SetProgress }) => {
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResult, settotalResult] = useState(1);

  let updateNews = async () => {
    document.title =
      String(category).slice(0, 1).toUpperCase() + String(category).slice(1);

    SetProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=db76d553d0384c75a5fcc72b0956ffe1&page=${page}&pagesize=${pageSize}`;
    let data = await fetch(url);
    SetProgress(50);
    let dataJson = await data.json();

    setArticle(dataJson.articles);
    settotalResult(dataJson.totalResults);
    SetProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  let fetchMoreData = async () => {
    setPage(page + 1);

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=db76d553d0384c75a5fcc72b0956ffe1&page=${page}&pagesize=${pageSize}`;
    let data = await fetch(url);
    let dataJson = await data.json();
    setArticle(article.concat(dataJson.articles));
    settotalResult(dataJson.totalResults);
  };

  return (
    <>
      <h1 className="text-2xl md:text-3xl text-center capitalize mt-20 md:mt-28 text-white">
        DailyNews - Top {category} Headlines
      </h1>

      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length <= totalResult ? true : false}
        loader={<Loading />}
      >
        <div className="mx-6 my-8  grid justify-items-center max-w-[100vw] overflow-x-hidden  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-8">
          {article.map((el) => {
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
};

export default NewsContainer;
