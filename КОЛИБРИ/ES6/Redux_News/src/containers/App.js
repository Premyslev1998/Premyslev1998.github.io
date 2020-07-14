import React, {Component} from "react";
import './App.css';

/** Store **/
import AddNews from '../components/AddNews';
import NewsList from '../components/NewsList';

export default class Main extends Component {
    render() {
        return (
            <main>
                <AddNews/>
                <NewsList/>
            </main>
        );
    }
}

