import React, { Component } from 'react';

/**** COMPONENTS ****/
import Header from './Components/Static_Component/Header/';
import Footer from './Components/Static_Component/Footer/';
import Main from './Components/Main/';
import Subcategory from './Components/Subcategory/';
import Product from './Components/Product/';
import Basket from './Components/Basket/';
import Category from './Components/Category/';
import LightboxBuy from './Components/Static_Component/Lightbox/Buy';
import Slider from './Components/Static_Component/Slider/';
import Form from './Components/Static_Component/Lightbox/Form';

/**** ROUTE ****/
import { Route, HashRouter } from 'react-router-dom';

/**** STORE ****/
import { observer } from 'mobx-react';
import mainStore from "./Lib/Store/mainStore";
import dataStore from "./Lib/Store/dataStore";
import SnackBar from "./Components/Static_Component/SnackBar";

const App = observer(class extends Component {

    constructor(props) {
        super(props);
        dataStore.getCategoryList();
        dataStore.switchPage();
    }

    componentDidMount() {
        window.addEventListener('scroll', App.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', App.handleScroll);
    }

    static handleScroll() {
        let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        mainStore.changeScroll(scrollTop);
    };

    render() {
        return (
            <HashRouter>
                <div className="space_body">
                    <LightboxBuy />
                    <div>
                        <SnackBar/>
                        <Header />
                        <Form />
                        <Route exact path="/" component={Main} />
                        <Route path="/subcategory" component={Subcategory} />
                        <Route path="/product" component={Product} />
                        <Route path="/basket" component={Basket} />
                        <Route path="/category/" component={Category} />
                        {/*<Route path="/profile" component={Profile}/>*/}
                        {mainStore.currentPage === "basket" || mainStore.currentPage === "profile" ? "" : <Slider />}
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        )
    }
});

export default App;