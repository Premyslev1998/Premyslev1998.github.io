import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './style.css';

/**** IMG ****/

/**** Store ****/
import { observer } from 'mobx-react';
import dataStore from "../../../Lib/Store/dataStore";
import lg from "../../../Lib/Store/langStore";
import basketStore from "../../../Lib/Store/basketStore";
import modalStore from "../../../Lib/Store/modalStore";

const BoxProduct = observer(class extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalBuy: false,
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
        }else{
            basketStore.changeCount(item.id, "+");
        }
        this.setState({
            modalBuy: true,
        });
        modalStore.changeModalBuy();
    }
    

    render() {
        const { value } = this.props;
        return (
            <div>
                {value.map((item, index) => {
                    return (
                        <div
                            className="product"
                            key={index}
                        >
                            <div className="full_product">
                                <div
                                    onClick={() => {
                                        this.nextPath(`/product/${item.id}`);
                                        dataStore.getProduct(item.id);
                                    }}
                                >
                                    <img src={item.photos[0]} alt="product" />
                                    <p className="product_name">{item.name}</p>
                                </div>
                                <div>
                                    <p className="product_price"
                                        onClick={() => { this.nextPath(`/product/${item.id}`); }}
                                    >
                                        {Object.keys(item.price).map((el, i) => {
                                            return (
                                                <span className="price_currency" key={i}>
                                                    {item.price[el]} {el}
                                                </span>
                                            );
                                        })}
                                    </p>
                                    <p
                                        onClick={() => this.buyProduct(item)}
                                        className="buy_button">{lg.translation.product_box.buy}
                                    </p>
                                    <p className="fast_buy">{lg.translation.product_box.quick_order}</p>
                                </div>
                            </div>

                            <div className="mobile_product">
                                <div
                                    className="box_mobile_product"
                                    onClick={() => {
                                        this.nextPath(`/product/${item.id}`);
                                        dataStore.getProduct(item.id);
                                    }}
                                >
                                    <img src={item.photos[0]} alt="product" />
                                    <div className="mobile_buy_panel">
                                        <p className="name_prod">{item.name}</p>
                                        <p className="product_price_mobile">
                                            {Object.keys(item.price).map((el, i) => {
                                                return (
                                                    <span className="price_currency" key={i}>
                                                        {item.price[el]} {el}
                                                    </span>
                                                );
                                            })}
                                        </p>
                                        <p 
                                            onClick={() => this.buyProduct(item)}
                                            className="blue_button mobile_buy_btn">{lg.translation.product_box.buy}</p>
                                        <p className="fast_buy">{lg.translation.product_box.quick_order}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        )
    }
});

export default withRouter(BoxProduct);
