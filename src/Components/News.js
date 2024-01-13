import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  uppercaseFunction = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totaldata: 0,
    };
    document.title = `${this.uppercaseFunction(
      this.props.category
    )} - fastest channel of india`;
  }

  static propTypes = {
    country: PropTypes.string.isRequired,
    pagesize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  };

  static defaultProps = {
    pagesize: 8,
    country: "in",
    category: "sports",
  };

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&PAGE=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.props.progress(20);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.progress(40);
    let parseData = await data.json();
    this.props.progress(70);
    this.setState({
      article: parseData.articles,
      totaldata: parseData.totalResults,
      loading: false,
      // page: this.state.page + 1,
    });
    this.props.progress(100);
  };

  number = 0;
  async componentDidMount() {
    if(this.number<1){
      this.updateNews();
      this.number++;
    }
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apikey}&PAGE=${
      this.state.page + 1
    }&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: this.state.article.concat(parseData.articles),
      totaldata: parseData.totalResults,
      page: this.state.page + 1,
    });
    
  };

  render() {
    return (
      <>
        <div>
          <h1 className="text-capitalize text-center mt-5">
            top News headlines of {`${this.props.category}`}
          </h1>
          <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.fetchMoreData}
            hasMore={this.state.article.length !== this.state.totaldata}
            loader={<Spinner />}
          >
            <div className="container my-2">
              <div className="row ms-0 justify-content-between align-items-center">
                {this.state.loading && <Spinner />}
                {this.state.article.map((Element, index) => {
                  return (
                    <div className="col-xl-4 col-md-6 col-12 my-4" key={index}>
                      <Newsitem
                        title={Element.title ? Element.title : ""}
                        description={
                          Element.description ? Element.description : ""
                        }
                        imageUrl={
                          Element.urlToImage
                            ? Element.urlToImage
                            : "https://images.moneycontrol.com/static-mcnews/2023/03/Sensex_nifty_market_down_Sensex-770x433.jpg"
                        }
                        NewsUrl={Element.url}
                        date={Element.publishedAt}
                        authorName={Element.author}
                        source={Element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
