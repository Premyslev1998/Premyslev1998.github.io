import React from "react";

interface newsItem {
    title: string,
    text: string,
    likes: number
}

interface NewsListProps {
    newsArray: newsItem[];
    renderFunc: (item: newsItem) => JSX.Element;
    initialPageSize: number;
}

interface NewsListState {
    currentPage: number;
}

export default class NewsList extends React.Component<NewsListProps, NewsListState> {

    state = {
        currentPage: 1
    };

    changePages = (openPage:number) => {
        this.setState({currentPage: openPage});
    };

    render() {
        const { newsArray, renderFunc, initialPageSize } = this.props;
        const { currentPage} = this.state;
        const arr = newsArray.slice(
            (currentPage - 1) * initialPageSize,
            (currentPage - 1) * initialPageSize + initialPageSize
        );
        let btnArray = [];
        for (let i:number = 0; i < (newsArray.length / initialPageSize); i++){
            btnArray.push(i + 1);
        }
        return (
            <main>
                {arr.map(renderFunc)}
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
            </main>
        );

    }
}