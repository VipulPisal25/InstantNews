import React, { Component } from 'react';
import NewItems from './NewItems';
import Spinner from './Spinner';
//import PropTypes from 'prop-types'

export default class News extends Component {
   
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=85cf0d9aa54e424fa6d7509524c7968f&pageSize=${this.props.pageSize}`;
        
        let data = await fetch(url);
        {this.setState({loading:true})};
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles,
            loading:false
        })
    }
    nextPageItems = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {
        
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=85cf0d9aa54e424fa6d7509524c7968f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            {this.setState({loading:true})};
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    prevPageItems = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=85cf0d9aa54e424fa6d7509524c7968f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        {this.setState({loading:true})}
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (
            <div className="container my-3">

                <h1 className='text-center' style={{textTransform: "capitalize"}}>Top Headlines {this.props.category}</h1>
                {this.state.loading && <Spinner/>}
                <div className="row my-3">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewItems title={element.title?element.title.slice(0, 45):"NA"} description={element.description?element.description.slice(0,140):"Null"} imgUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" onClick={this.prevPageItems} className="btn btn-success">Previous</button>
                    <button disabled={this.state.articles.length<this.props.pageSize} type="button" onClick={this.nextPageItems} className="btn btn-success">Next</button>
                </div>

            </div>
        )
    }
}
