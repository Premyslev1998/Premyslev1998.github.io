import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

/**** IMG ****/
import DeleteProduct from "../../Static/img/close.svg";

/**** Store ****/
import { observer } from 'mobx-react';
import basketStore from "../../Lib/Store/basketStore";
import lg from "../../Lib/Store/langStore";
import dataStore from "../../Lib/Store/dataStore";

const Table = observer(class Table extends Component {
    constructor(props) {
        super(props);
        this.nextPath = this.nextPath.bind(this)
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <section className="my_basket">
                    <div className="row_basket header_basket_table">
                        <div className="row_1">{lg.translation.basket.table.name}</div>
                        <div className="row_2">{lg.translation.basket.table.photo}</div>
                        <div className="row_3">{lg.translation.basket.table.price}</div>
                        <div className="row_4">{lg.translation.basket.table.amount}</div>
                        <div className="row_5">{lg.translation.basket.table.sum}</div>
                    </div>
                    {basketStore.array_basket.map((item, index) => {
                        return (
                            <div className="row_basket" key={index}>
                                <div className="row_1">
                                    <Link to={`/product/${item.id}`}
                                        onClick={() => {
                                            this.nextPath(`/product/${item.id}`);
                                            dataStore.getProduct(item.id);
                                        }}
                                    >
                                        {item.name}</Link>
                                </div>
                                <div className="row_2"><img src={item.photos ? item.photos[0] : ''} alt="product" /></div>
                                <div className="row_3">{item.price.usd} $</div>
                                <div className="row_4">
                                    <button onClick={() => 
                                        {
                                            if (Number(String(Math.abs(item.count))) <= 100) {
                                                basketStore.changeCount(item.id, "-")
                                            }
                                        }}>-</button>
                                    <input
                                        type="tel"
                                        min="0" step="1"
                                        max="100"
                                        pattern="\d+"
                                        onChange={(e) => {
                                            if (Number(String(Math.abs(e.target.value)).replace(/^0+/, '')) <= 100) {
                                                basketStore.changeCount(item.id, "null", Number(String(Math.abs(e.target.value)).replace(/^0+/, '')));
                                            } else {
                                                basketStore.changeCount(item.id, "null", Number(String(Math.abs(100)).replace(/^0+/, '')));
                                            }
                                        }}
                                        value={
                                            Number(String(Math.abs(item.count)).replace(/^0+/, '')) <= 100 ?
                                                Number(String(Math.abs(item.count)).replace(/^0+/, '')) :
                                                100
                                        } />

                                    <button onClick={() => {
                                        if (Number(Math.abs(item.count)) < 100) {
                                            basketStore.changeCount(item.id, "+")
                                        }
                                    }}
                                    >+</button>
                                </div>
                                <div className="row_5">{(item.price.usd * item.count).toFixed(2)} $
                                <img src={DeleteProduct}
                                        alt="deleteProduct"
                                        className="delete_product"
                                        onClick={() => basketStore.deleteProductInBasket(item.id)} />
                                </div>
                            </div>
                        )
                    })}
                </section>
                <section className="my_basket_panel">
                    <div className="clear_basket">
                        <button onClick={() => basketStore.clearAllBasket()}>{lg.translation.basket.table.clear}</button>
                    </div>
                    <div className="result_box">
                        <div className="result_calc">
                            <span className="blue_color itog_basket">{lg.translation.basket.table.total}: </span>
                            <p className="all_price_basket">
                                {Object.keys(basketStore.sum_basket).map((cur, i) => {
                                    return (
                                        <span key={i} className="price_currency">
                                            {basketStore.sum_basket[cur].toFixed(2)} {cur}
                                        </span>
                                    )
                                })}
                            </p>
                        </div>
                        <div className="bye_btn_basket">
                            <button className="blue_button">{lg.translation.basket.table.checkout}</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});

export default withRouter(Table);