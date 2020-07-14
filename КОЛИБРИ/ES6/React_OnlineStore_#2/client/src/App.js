import React, {Component} from "react";
import {Route, HashRouter} from 'react-router-dom';

/*** Components ***/
import Header from './Components/StaticComponents/Header';
import Footer from './Components/StaticComponents/Footer';
import Home from './Components/Home';
import Basket from './Components/Basket';

/** Redux **/
import {bindActionCreators} from "redux";
import {getPizzaList, getSnackList, getWaterList} from "./Store/actions";
import connect from "react-redux/es/connect/connect";

class App extends Component {

    startRequest = async () => {
        const requestGetPizza = await fetch('/api/pizza');
        const pizzaList = await requestGetPizza.json();
        this.props.getPizzaList(pizzaList);

        const requestGetSnack = await fetch('/api/snack');
        const snackList = await requestGetSnack.json();
        this.props.getSnackList(snackList);

        const requestGetWater = await fetch('/api/water');
        const waterList = await requestGetWater.json();
        this.props.getWaterList(waterList);
    };

    componentWillMount() {
        this.startRequest();
    };

    render() {
        return (
            <HashRouter>
                <div className="vh_block">
                    <div>
                        <Header/>
                        <main className="container global_main">
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/basket" component={Basket}/>
                        </main>
                    </div>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPizzaList: bindActionCreators(getPizzaList, dispatch),
        getSnackList: bindActionCreators(getSnackList, dispatch),
        getWaterList: bindActionCreators(getWaterList, dispatch),
    }
};

export default connect("", mapDispatchToProps)(App);