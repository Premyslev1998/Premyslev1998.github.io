import * as React from "react";
import NewsList from "./newsList";
import "./styles.css";

interface InewsItem {
  title: string;
  text: string;
}

const newsList: InewsItem[] = [
  { title: "Один", text: "Какой-то текст" },
  { title: "Два", text: "Текст какой-то" },
  { title: "Три", text: "Какой-то" },
  { title: "Четыре", text: "Текст" },
  { title: "Пять", text: "Здесь какой-то текст" },
  { title: "Шесть", text: "Текст какой-то здесь" },
  { title: "Семь", text: "Текст здесь какой-то, ага" },
  { title: "Восемь", text: "Текстик" },
  { title: "Девять", text: "." }
];

const renderNewsItem = (item: InewsItem) => {
  const { text, title } = item;
  return (
    <div className="block-name">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

interface IAppState {
  pageSize: number;
  searchString: string;
  resultArray: InewsItem[];
}

class App extends React.Component<{}, IAppState> {
  public state = {
    pageSize: 1,
    searchString: "",
    resultArray: newsList
  };

  changePageSize = (value: string) => {
    let num: number = Number(value);
    this.setState({ pageSize: num });
  };

  search = (value: string) => {
    value = value.toLowerCase();
    this.setState({ searchString: value });
    let arr: InewsItem[] = newsList.filter(el => {
      if (el.title.toLowerCase().includes(value)) {
        return el.title.toLowerCase().includes(value);
      } else {
        return el.text.toLowerCase().includes(value);
      }
    });
    this.setState({ resultArray: arr });
  };

  render() {
    let { pageSize } = this.state;
    const { searchString, resultArray } = this.state;

    return (
      <section className="app">
        <h3 className="app-header">Привет, React!</h3>
        <div className="app-header-block">
          <div>
            <p>Новостей на странице: {pageSize}</p>
            <input
              type="range"
              min="1"
              max={newsList.length}
              value={pageSize}
              step="1"
              onChange={e => this.changePageSize(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              className="input"
              value={searchString}
              onChange={e => this.search(e.target.value)}
            />
          </div>
          <div />
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
