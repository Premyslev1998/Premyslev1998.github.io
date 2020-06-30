import React, { Component } from 'react';
import SlickSlider from "react-slick";
import { withRouter } from 'react-router-dom';

import './style.css';

/**** MODULE ****/
import BoxProduct from '../BoxProduct';

/**** IMG ****/

/**** STORE ****/
import { observer } from 'mobx-react';
import dataStore from "../../../Lib/Store/dataStore";
import modalStore from "../../../Lib/Store/modalStore";
import lg from "../../../Lib/Store/langStore";
import basketStore from "../../../Lib/Store/basketStore";

const Slider = observer(class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider_setting: {
                swipe: false,
                speed: 500,
                dots: true,
                arrows: true,
                autoplay: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    { breakpoint: 1000, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                    { breakpoint: 750, settings: { slidesToShow: 2, slidesToScroll: 2, arrows: false } },
                ]
            },
        };
        this.buyProduct = this.buyProduct.bind(this);
        this.nextPath = this.nextPath.bind(this)
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    buyProduct(item) {
        let checkProduct = basketStore.array_basket.filter(el => { return el.id === item.id });
        if (!checkProduct.length) {
            let { name, price, id, photos } = item;
            basketStore.addProductInBasket({ id, name, price, photos, count: 1 });
        } else {
            basketStore.changeCount(item.id, "+");
        }
        this.setState({
            modalBuy: true,
        });
        modalStore.changeModalBuy();
    }

    render() {
        return (
            <div className="container">
                <section>
                    <button
                        className="blue_button recommend_btn"
                        onClick={() => {dataStore.handleSnackBar(true)}}
                    >
                        {lg.translation.slider.rec_products}
                    </button>
                </section>
                <SlickSlider {...this.state.slider_setting} className="recommend_slider">
                    {dataStore.array_rand.slice(0, 11).map((item, index) => {
                        return (
                            <div
                                onClick={() => {
                                    this.nextPath(`/product/${item.id}`);
                                    dataStore.getProduct(item.id);
                                    modalStore.closeModalBuy();
                                }}
                                className="product product_in_slider" key={index}>
                                <div>
                                    {item.photos[0] && <img src={item.photos[0]} alt="product" />}
                                    <p className="product_name">{item.name}</p>
                                </div>
                                <div>
                                    <p className="product_price"
                                        onClick={() => {
                                            this.nextPath(`/product/${item.id}`);
                                            dataStore.getProduct(item.id);
                                            modalStore.closeModalBuy();
                                        }}
                                    >
                                        {Object.keys(item.price).map((el, i) => {
                                            return (
                                                <span className="price_currency" key={i}>
                                                    {item.price[el]} <i>{el}</i>
                                                </span>
                                            )
                                        })}
                                    </p>
                                    <p
                                        onClick={() => this.buyProduct(item)}
                                        className="buy_button">{lg.translation.product_box.buy}
                                    </p>
                                    <p className="fast_buy">{lg.translation.product_box.quick_order}</p>
                                </div>
                            </div>
                        )
                    })}
                </SlickSlider>
                <div className="product_box recommend_slider_all">
                    <BoxProduct value={dataStore.array_rand.slice(0, 4)} />
                </div>
            </div>
        );
    }
});

export default withRouter(Slider);