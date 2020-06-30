import React, {Component} from 'react';
import './style.css';

/**** IMG ****/
import ProductImg from '../../../Static/img/product.jpg';

export default class Favorites extends Component{
    render(){
        return(
            <section className="favorites_profile">
                <div className="title_page">
                    <h1>Избранное</h1>
                </div>
                <div className="product_box">
                    <div className="product">
                        <a href="#/">
                            <img src={ProductImg} alt="product"/>
                            <p className="product_name">Apple iPhone XR 256 ГБ(PRODUCT)RED</p>
                            <p className="product_price">78.990 руб.</p>
                            <div className="product_buу">
                                <a href="#/" className="blue_color">Купить</a>
                                <p>Быстрый заказ</p>
                            </div>
                        </a>
                    </div>
                    <div className="product">
                        <a href="#/">
                            <img src={ProductImg} alt="product"/>
                            <p className="product_name">Apple iPhone XR 256 ГБ(PRODUCT)RED</p>
                            <p className="product_price">78.990 руб.</p>
                            <div className="product_buу">
                                <a href="#/" className="blue_color">Купить</a>
                                <p>Быстрый заказ</p>
                            </div>
                        </a>
                    </div>
                    <div className="product">
                        <a href="#/">
                            <img src={ProductImg} alt="product"/>
                            <p className="product_name">Apple iPhone XR 256 ГБ(PRODUCT)RED</p>
                            <p className="product_price">78.990 руб.</p>
                            <div className="product_buу">
                                <a href="#/" className="blue_color">Купить</a>
                                <p>Быстрый заказ</p>
                            </div>
                        </a>
                    </div>
                    <div className="product">
                        <a href="#/">
                            <img src={ProductImg} alt="product"/>
                            <p className="product_name">Apple iPhone XR 256 ГБ(PRODUCT)RED</p>
                            <p className="product_price">78.990 руб.</p>
                            <div className="product_buу">
                                <a href="#/" className="blue_color">Купить</a>
                                <p>Быстрый заказ</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}