import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {deleteNews, likeIncrement} from "../../store/actions";
import {connect} from 'react-redux';

/** Material **/
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";

/** end Material **/

class NewsCard extends Component {

    state = {
        currentPage: 1,
        initialPageSize: this.props.initialPageSize,
    };

    changePages = (opePage) => {
        this.setState({currentPage: opePage});
    };

    componentWillReceiveProps(nextProps) {
        if (this.state.initialPageSize !== nextProps.initialPageSize) {
            this.setState({
                currentPage: 1,
                initialPageSize: nextProps.initialPageSize
            });
        }
    }

    render() {
        const {likeIncrement, deleteNews, initialPageSize, array} = this.props;
        const {currentPage} = this.state;

        const paginationArr = array.slice(
            (currentPage - 1) * initialPageSize,
            (currentPage - 1) * initialPageSize + initialPageSize
        );


        let btnArray = [];
        for (let i = 0; i < (array.length / initialPageSize); i++) {
            btnArray.push(i + 1);
        }

        return (
            <article className="news_container">
                {paginationArr.map((news, index) => {
                    return (
                        <Card key={index} className="news_card">
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {news.title}
                                    </Typography>
                                    <Typography component="p">
                                        {news.text}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    color="primary"
                                    onClick={() => likeIncrement(news.id)}
                                >
                                    Likes: {news.likes}
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={() => deleteNews(news.id)}
                                >Delete</Button>
                            </CardActions>
                        </Card>
                    )
                })}
                <div className="btn_panel">
                    {btnArray.map((el, i) => {
                        return (
                            <button
                                key={i}
                                onClick={() => this.changePages(el)}
                                className={el === currentPage ? "active" : ""}
                            >
                                {el}
                            </button>
                        )
                    })}
                </div>
            </article>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        likeIncrement: bindActionCreators(likeIncrement, dispatch),
        deleteNews: bindActionCreators(deleteNews, dispatch),
    }
};

export default connect("", mapDispatchToProps)(NewsCard);