import React, { Component } from 'react';
import Card from './components/Card';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }

    componentDidMount = async () => {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=928306523b81417ab3d4375bce7485b0&page=1&pagesize=10";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    };

    prevClickHandler = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=928306523b81417ab3d4375bce7485b0&page=${this.state.page - 1}&pagesize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        });
    };

    nextClickHandler = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=928306523b81417ab3d4375bce7485b0&page=${this.state.page + 1}&pagesize=10`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.articles.map((item) =>
                    <Card key={item.description} title={item.title} description={item.description} imgUrl={item.urlToImage} newsUrl={item.url} />
                )}

                <nav aria-label="Page navigation example">
                    <ul className="pagination container d-flex justify-content-between">
                        <li className="page-item">
                            <button type='button' className="btn btn-outline-light" disabled={this.state.page <= 1} onClick={this.prevClickHandler}> &larr; Previous</button>
                        </li>
                        <li className="page-item">
                            <button type='button' className="btn btn-outline-light" disabled={this.state.page + 1 > (Math.ceil)} onClick={this.nextClickHandler}>Next &rarr;</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}