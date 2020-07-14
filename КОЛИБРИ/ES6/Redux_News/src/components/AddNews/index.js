import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { addNews } from '../../store/actions';
import Button from '@material-ui/core/Button';

class NewsInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stateAddNews: {
                title: "",
                text: ""
            },
            error: false,
        }
    }

    changeTitle = (e) => {
        let changeTitle = e.target.value;
        this.setState(prevState => ({
            stateAddNews: {
                ...prevState.stateAddNews,
                title: changeTitle
            }
        }))
    };

    changeText = (e) => {
        let changeText = e.target.value;
        this.setState(prevState => ({
            stateAddNews: {
                ...prevState.stateAddNews,
                text: changeText
            }
        }))
    };


    sendNewNews = () => {
        const {title, text} = this.state.stateAddNews;
        if(text.trim() && title.trim()){
            this.props.addNews(this.state.stateAddNews);
            this.setState({
                stateAddNews: {
                    title: "",
                    text: ""
                },
                error: false
            })
        }else{
            this.setState({error: true})
        }
    };

    render(){
        const {stateAddNews,error} = this.state;
        return(
            <section className="news_input">
                <h3>Добавить новость</h3>

                <div className="input_box">
                    <label htmlFor="">Заголовок</label>
                    <input
                        type="text"
                        placeholder="Заголовок"
                        value={stateAddNews.title}
                        onChange={(e) => this.changeTitle(e)}
                    />
                </div>

                <div className="input_box">
                    <label htmlFor="">Текст</label>
                    <input
                        type="text"
                        placeholder="Текст"
                        value={stateAddNews.text}
                        onChange={(e) => this.changeText(e)}
                    />
                </div>
                <Button
                    className="add_news_btn"
                    color="primary"
                    onClick={() => this.sendNewNews()}
                >Добавить новость</Button>
                {error && <p className="error">Введите данные</p>}
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNews: bindActionCreators(addNews, dispatch),
    }
};

export default connect("", mapDispatchToProps)(NewsInput);