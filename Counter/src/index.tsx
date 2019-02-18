import * as React from "react";
import * as ReactDOM from "react-dom";
import { CounterRedux, store } from "./reducers";
import { Provider } from "react-redux";

interface AppProps {}

const App = (props: AppProps) => {
  return <CounterRedux />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
