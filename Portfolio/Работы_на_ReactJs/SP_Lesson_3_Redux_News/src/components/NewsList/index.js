import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import NewsCard from './Card';

class NewsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchString: "",
            searchArray: this.props.news,
            pageSize: 6,
        };
    }

    changePageSize = (value) => {
        let num = Number(value);
        this.setState({pageSize: num});
    };

    searchNews = (value) => {
        this.setState({searchString: value});
        value = value.toLowerCase();
        let arr = this.props.news.filter((el) => {
            if(el.title.toLowerCase().includes(value)){
                return el.title.toLowerCase().includes(value);
            }else {
                return el.text.toLowerCase().includes(value);
            }
        });
        this.setState({searchArray: arr});
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            searchArray: nextProps.news,
            searchString: ""
        });
    }

    render(){
        const {news} = this.props;
        const {searchString, searchArray, pageSize} = this.state;
        return(
            <div className="right_container">
                <section className="changes_box">
                    <article className="search_news_box">
                        <h3>Поиск новостей</h3>
                        <input
                            type="text"
                            placeholder="Поиск..."
                            value={searchString}
                            onChange={(e) => this.searchNews(e.target.value)}
                        />
                    </article>
                    <article className="page_size">
                        <p>Показано новостей на странице: {pageSize} (max {news.length})</p>
                        <input
                            type="range"
                            min="1"
                            max={news.length}
                            value={pageSize}
                            step="1"
                            onChange={(e) => this.changePageSize(e.target.value)}
                        />
                    </article>
                </section>
                {news.length === 0 ?
                    <p>У вас нет новостей</p>
                        :
                    <NewsCard
                        array={searchArray}
                        initialPageSize={pageSize}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
};

export default connect(mapStateToProps)(NewsList);