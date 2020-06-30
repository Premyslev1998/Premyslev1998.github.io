import React, {Component} from 'react';
import './style.css';

import {animateScroll as scroll} from 'react-scroll'
import Navigation from './Navigation';
import {Link} from 'react-router-dom';

/** IMG **/
import logoImg from '../../../Static/img/logo.svg';

/** REDUX **/
import connect from "react-redux/es/connect/connect";

class Header extends Component {

    render() {
        const {currentPage} = this.props;
        return (
            <header
                className={currentPage === "basket" ? "flex orange_line" : "flex" }
            >
                <div className="my_container">
                    {currentPage !== 'basket' ?
                        <div className="flex flex_header">
                            <div className="header_left flex">
                                <a onClick={() => scroll.scrollToTop()}>
                                    <img src={logoImg} alt="logo" className="header_logo"/>
                                </a>
                                <div className="telephone">
                                    <h2>+7929292929</h2>
                                    <p>Ежедневно с <i className="orange_color">8:30</i> до <i
                                        className="orange_color">22:00</i></p>
                                </div>
                            </div>
                            <Navigation/>
                        </div>
                            :
                        <div className="flex basket_header">
                            <div className="flex">
                                <Link to="/">
                                    <img src={logoImg} alt="logo" className="header_logo"/>
                                </Link>
                                <p className="basket_header_info">
                                    Бесплатная доставка от <i className="orange_color">1999</i> рублей
                                </p>
                            </div>
                            <div className="telephone basket_phone">
                                <h2>+7 (929) 292 90 29</h2>
                                <p>Ежедневно с <i className="orange_color">8:30</i> до <i
                                    className="orange_color">22:00</i></p>
                            </div>
                        </div>
                    }
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        currentPage: state.currentPage,
    }
};

export default connect(mapStateToProps)(Header);
