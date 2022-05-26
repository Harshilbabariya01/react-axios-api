import React, { Component } from 'react'
import Card from './Card';

class Body extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }

    componentDidMount = async () => {
        let url = 'https://newsapi.org/v2/top-headlines?country=us&catagory=bussiness&apiKey=928306523b81417ab3d4375bce7485b0&page=1&pagesize=10';
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    };

    prevClickHandler = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&catagory=bussiness&apiKey=928306523b81417ab3d4375bce7485b0&page=${this.state.page - 1}&pagesize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });
    };

    nextClickHandler = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&catagory=bussiness&apiKey=928306523b81417ab3d4375bce7485b0&page=${this.state.page + 1}&pagesize=10`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.articles.map((item) =>
                    <Card key={item.description} imgUrl={item.urlToImage} newsUrl={item.url} title={item.title} description={item.description} />
                )}

                <nav aria-label="Page navigation example">
                    <ul className="pagination container d-flex justify-content-between">
                        <li className="page-item">
                            <button type='button' className="btn btn-outline-light" disabled={this.state.page <= 1} onClick={this.prevClickHandler}> &larr; Previous</button>
                        </li>
                        <li className="page-item">
                            <button type='button' className="btn btn-outline-light" onClick={this.nextClickHandler}>Next &rarr;</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Body