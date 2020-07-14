import React, {Component} from 'react';
import PizzaImg from "../../../../Static/img/header/pizza.svg";

import {Link} from "react-scroll/modules";
import SnackImg from "../../../../Static/img/header/snack.svg";
import WaterImg from "../../../../Static/img/header/water.svg";
import BasketImg from "../../../../Static/img/header/basket.svg";
import connect from "react-redux/es/connect/connect";

class Navigation extends Component {
    render(){
        return(
            <div className="header_panel flex">
                <nav className="flex">
                    <Link to="anchor_pizza" spy={true} smooth={true} offset={-92}>
                        <h3>Пицца</h3>
                        <img src={PizzaImg} alt="pizza"/>
                    </Link>
                    <Link to="anchor_snack" spy={true} smooth={true} offset={-92}>
                        <h3>Закуски</h3>
                        <img src={SnackImg} alt="pizza"/>
                    </Link>
                    <Link to="anchor_water" spy={true} smooth={true} offset={-92}>
                        <h3>Напитки</h3>
                        <img src={WaterImg} alt="pizza"/>
                    </Link>
                </nav>
                <a href="#/basket" className="basket flex">
                    <div className="basket_icon">
                        <img src={BasketImg} alt="pizza"/>
                        <div className="basket_count">{this.props.basket.length}</div>
                    </div>
                    <h3 className="hidden_950px">Корзина</h3>
                </a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
    }
};

export default connect(mapStateToProps)(Navigation);