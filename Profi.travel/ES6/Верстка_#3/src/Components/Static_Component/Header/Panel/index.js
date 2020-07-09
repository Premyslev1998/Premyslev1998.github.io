import React, {Component} from 'react';
import './style.css';

/**** IMG ****/
import SearchImg from "../../../../Static/img/header_footer/search.svg";
import BasketImg from "../../../../Static/img/header_footer/basket.svg";

/**** STORE ****/
import {observer} from 'mobx-react';
import lg from "../../../../Lib/Store/langStore";
import dataStore from "../../../../Lib/Store/dataStore";
import basketStore from "../../../../Lib/Store/basketStore";

const Panel = observer(class extends Component{
    render(){
        return(
            <section className="header_gray">
                <div className="container">
                    <div className="list_panel">
                        <img
                            src={SearchImg}
                            alt="search"
                            id="search"
                            onClick={() => {dataStore.handleSnackBar(true)}}
                        />
                        {dataStore.array_category.map((item, index) => {
                            return(
                                <a href={`#/category/${item.id}`} key={index}
                                   onClick={() => {dataStore.getSubcategoryList(item.id)}}>
                                    {item.name}
                                </a>
                            )
                        })}
                    </div>
                    <a href="#/basket" className="list_panel">
                        <div className="basket">
                            <img src={BasketImg} alt="basket"/>
                            <span className="count_bask">{basketStore.array_basket.length}</span>
                        </div>
                        <i className="close_basket">{lg.translation.header.basket}</i>
                    </a>
                </div>
            </section>
        )
    }
});

export default Panel;