import React, { Component } from 'react';
import './style.css';

/**** COMPONENTS ****/
import NavBar from '../Static_Component/NavBar/';
import BoxProduct from '../Static_Component/BoxProduct/';

/**** IMG ****/
import CheckBoxOn from '../../Static/img/checkbox_on.svg';
import CheckBoxOff from '../../Static/img/checkbox_off.svg';

/**** Store ****/
import { observer } from 'mobx-react';
import mainStore from "../../Lib/Store/mainStore";
import dataStore from "../../Lib/Store/dataStore";
import lg from "../../Lib/Store/langStore";

const Subcategory = observer(class extends Component {

    constructor(props) {
        super(props);
        this.setState({
            tags: dataStore.current_subcategory.tags || []
        })
    }

    componentWillMount() {
        mainStore.openNewPage("Category");
    }

    render() {
        return (
            <article>
                <NavBar open={'subcategory'} />
                <div className="container">
                    <div className="title_page">
                        <h1>
                            <span className="name_category">
                                {dataStore.current_subcategory.name}
                            </span>
                            <span className="title_count">
                                {dataStore.array_product.length}
                                {lg.translation.category.count_items}
                            </span>
                        </h1>
                    </div>
                    <article className="category_box">
                        <div className="filter">
                            <div className="li">
                                <img src={CheckBoxOn} alt="CheckBox" />
                                {lg.translation.category.in_stock}
                            </div>
                            {Boolean(dataStore.array_subcategory_options) && dataStore.array_subcategory_options.map((el) => {
                                return (
                                    <div
                                        className="ol"
                                        key={el.id}
                                        onClick={() => {dataStore.handleSnackBar(true)}}
                                    >
                                        <div className="header_li">{el.name[0].toUpperCase() + el.name.slice(1)}
                                    </div>
                                    {el.values.map((option) => {
                                        return (
                                            <div className="li" key={option.id}>
                                                <img src={CheckBoxOff} alt="CheckBox" />
                                                {option.value}
                                            </div>
                                        )
                                    })}
                                </div>)
                            })}
                        </div>
                        <div className="category_product">
                            <div className="product_box">
                                <BoxProduct value={dataStore.array_product} />
                            </div>
                            <div className="show_more_panel">
                                {dataStore.array_product.length > 6 &&
                                    <div>
                                        <button className="show_more blue_button">
                                            {lg.translation.category.show_more}
                                        </button>
                                        <ol className="nav_num">
                                            <li className="blue_color">1</li>
                                        </ol>
                                    </div>
                                }
                                <div className="tags">
                                    {dataStore.current_subcategory.tags &&dataStore.current_subcategory.tags.map((item, index) => {
                                        return (<span key={index}>{item}</span>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </article>
        )
    }
});

export default Subcategory;