import React, {Component} from 'react';
import './css/App.css';
import NewsList from './Components/NewsList';

interface newsItem {
    title: string,
    text: string,
    likes: number
}

const newsList: Array<newsItem> = [

    {title: "Салат", text: "В чём сила, брат?", likes: 6},
    {title: "сУпер", text: "Это текст", likes: 2},
    {title: "Новость #2", text: "Всё понятно", likes: 4},

    {title: "Сила", text: "Как у вас дела?", likes: 6},
    {title: "Новость #3", text: "Что-то на англицком", likes: 2},
    {title: "Рыбалка", text: "Информация", likes: 4},

    {title: "Рыба", text: "12 друзей", likes: 6},
    {title: "Помощь", text: "Что за бред", likes: 2},
    {title: "Информ", text: "Извините", likes: 4},

    {title: "КолЯн", text: "Купил монитор", likes: 6},
    {title: "Монитор", text: "Продал рыбу", likes: 2},
    {title: "Куб", text: "Сейчас будет мясо", likes: 4},

];

const renderNewsItem = (item: newsItem) => {
    const { text, title, likes } = item;
    return (
        <article className="news">
            <h1>{title}</h1>
            <p>{text}</p>
            <i>Likes: {likes}</i>
        </article>
    );
};

interface AppState {
    pageSize: number,
    searchString: string,
    resultArray: newsItem[],
}

class App extends React.Component<{},AppState> {

    state = {
        pageSize: 3,
        searchString: "",
        resultArray: newsList,
    };

    changePageSize = (value:string) => {
        let num:number = Number(value);
        this.setState({pageSize: num});
    };

    search = (value:string) => {
        value = value.toLowerCase();
        this.setState({searchString: value});
        let arr:newsItem[] = newsList.filter((el) => {
            if(el.title.toLowerCase().includes(value)){
                return el.title.toLowerCase().includes(value);
            }else {
                return el.text.toLowerCase().includes(value);
            }
        });
        this.setState({resultArray: arr});
    };

    render() {
        let {pageSize} = this.state;
        const {searchString, resultArray} = this.state;

        return (
            <section>
                <div className="search_input">
                    <article>
                        <p>Показано новостей на странице: {pageSize} (max {newsList.length})</p>
                        <input
                            type="range"
                            min="1"
                            max={newsList.length}
                            value={pageSize}
                            step="1"
                            onChange={(e) => this.changePageSize(e.target.value)}
                        />
                    </article>

                    <article>
                        <h3>Совпадений в новостях : {resultArray.length}</h3>
                        <input
                            type="text"
                            value={searchString}
                            onChange={(e) => this.search(e.target.value)}
                            placeholder="Поиск"
                        />
                    </article>
                    <article/>
                </div>

                <NewsList
                    newsArray={resultArray}
                    initialPageSize={pageSize}
                    renderFunc={renderNewsItem}
                />

            </section>
        );
    }
}

export default App;