import React, { Component } from 'react';
import './style.css';

/**** COMPONENTS ****/
import Table from './Table';

/**** IMG ****/
import ArrowDownGray from "../../Static/img/header_footer/arrow_down_gray.svg";

/**** Store ****/
import { observer } from 'mobx-react';
import mainStore from "../../Lib/Store/mainStore";
import basketStore from "../../Lib/Store/basketStore";
import modalStore from "../../Lib/Store/modalStore";
import lg from "../../Lib/Store/langStore";
import dataStore from "../../Lib/Store/dataStore";

const Basket = observer(class extends Component {

    componentWillMount() {
        mainStore.openNewPage("basket");
    }

    render() {
        return (
            <div className="container">
                <section className="title_page title_page_basket">
                    <h1>{lg.translation.basket.title}</h1>
                    <div className="profile_city">
                        <b onClick={() => modalStore.changeModalCity()}>{dataStore.current_location}</b>
                        <img src={ArrowDownGray} alt="arrow" className="arrow_header" />
                        <p>{lg.translation.basket.city_info}</p>
                    </div>
                </section>
                {!basketStore.array_basket.length ?
                    <div className="empty_basket">
                        <p>{lg.translation.basket.clear_basket}</p>
                        <a href="#/">
                            <button className="blue_button">{lg.translation.basket.out_basket}</button>
                        </a>
                    </div>
                    :
                    <Table />
                }
            </div>
        )
    }
});

export default Basket;