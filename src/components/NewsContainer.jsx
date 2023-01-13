import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsContainer extends Component {
  article = [
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "India vs Spain, Men's Hockey World Cup 2023 Highlights: Hardik Singh, Amit Rohidas On Target As India Beat Spain 2-0 - NDTV Sports",
      description:
        "India vs Spain, Men's Hockey World Cup 2023 Highlights: India began their Men's Hockey World Cup 2023 campaign with 2-0 win over Spain, at the Birsa Munda Hockey Stadium, Rourkela",
      url: "https://sports.ndtv.com/hockey-world-cup-2023/india-vs-spain-hockey-world-cup-2023-live-score-updates-xxx-xxx-3689869",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/opemgq3o_hardik-singh-twitter_625x300_13_January_23.jpg",
      publishedAt: "2023-01-13T15:26:36Z",
      content:
        "India vs Spain, Men's Hockey World Cup 2023 Highlights: India began their Men's Hockey World Cup 2023 campaign with 2-0 win over Spain, at the Birsa Munda Hockey Stadium, Rourkela. Amit Rohidas and H… [+444 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "iPhone 14 Pro looks at the price of Redmi Note 11! Check out this Chinese budget phone - HT Tech",
      description:
        "iPhone 14 Pro clone: The Letv S1 Pro is a new budget smartphone that looks like an iPhone 14 Pro.",
      url: "https://tech.hindustantimes.com/mobile/news/iphone-14-pro-looks-at-the-price-of-redmi-note-11-check-out-this-chinese-budget-phone-71673623065865.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/01/13/1600x900/Letv_S1_Pro_1673623273375_1673623284605_1673623284605.jpg",
      publishedAt: "2023-01-13T15:21:59Z",
      content:
        "The iPhone 14 Pro is one of the current trendsetters in the smartphone world but its steep price tag puts it out of reach for a lot of people. It's Dynamic island, the pill shaped cutout, the triple … [+1742 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "‘World’s longest river cruise’ could threaten endangered Ganges dolphin, experts warn - The Guardian",
      description:
        "A luxury cruise has been hailed as the start of a new age of Indian tourism. But conservationists fear the impact of increased river traffic and pollution",
      url: "https://www.theguardian.com/environment/2023/jan/13/india-worlds-longest-river-cruise-endangered-ganges-dolphin-aoe",
      urlToImage:
        "https://i.guim.co.uk/img/media/446d32c81a900eb11abafc11a5f01be7c6254934/7_0_1500_900/master/1500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=678bd6710a46394d43068d97c936cf49",
      publishedAt: "2023-01-13T13:31:00Z",
      content:
        "The Indian prime minister, Narendra Modi, has officially launched the worlds longest river cruise from the city of Varanasi in Uttar Pradesh. The luxury voyage will last 51 days, travelling 3,200km v… [+6338 chars]",
    },
    {
      source: {
        id: null,
        name: "Rediff.com",
      },
      author: "Rediff Sports",
      title:
        "To win medals for country has been my biggest honour: Sania - Rediff.com",
      description:
        "Sania Mirza, who is competing in her final Grand Slam at the Australian Open, penned an emotional note for her fans on social media.",
      url: "https://www.rediff.com/sports/report/to-win-medals-for-country-has-been-my-biggest-honour-sania-mirza/20230113.htm",
      urlToImage: "https://im.rediff.com/sports/2023/jan/13sania1.jpg",
      publishedAt: "2023-01-13T13:21:39Z",
      content:
        "IMAGE: Sania Mirza will call time on her career after next month's Dubai Tennis Championships. Photograph: Sania Mirza/Instagram\r\nSania Mirza, who is competing in her final Grand Slam at the Australi… [+2397 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=9b1de695cba64b559c7edc7ff635a692";
    let data = await fetch(url);
    let dataJson = await data.json();
    this.setState({
      article: dataJson.articles,
    });
  }

  render() {
    return (
      <div className="mx-6 my-20 md:my-28 grid justify-items-center max-w-[100vw] overflow-x-hidden  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-8">
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
    );
  }
}

export default NewsContainer;
