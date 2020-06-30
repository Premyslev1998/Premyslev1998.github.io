import React, { Component } from 'react';
import './style.css';

import { Link } from 'react-router-dom';

/**** STORE ****/
import { observer } from "mobx-react";
import dataStore from "../../../Lib/Store/dataStore";
import lg from "../../../Lib/Store/langStore";

const NavBar = observer(class extends Component {

    render() {
        const { open } = this.props;
        return (
            <section className="navigation_line">
                <div className="container">
                    <ol className="navigation_history">
                        <li><Link to="/">{lg.translation.nav_bar.main}</Link></li>

                        {open === "error" && 
                            <li>
                                Ошибка
                            </li>
                        }

                        {open === "category" && 
                            <li>
                                {dataStore.current_category.name}
                            </li>
                        }

                        {open === "subcategory" &&
                            <li>
                                <Link to={`/category/${dataStore.current_category.id}`}
                                    onClick={async () => {
                                        const id = dataStore.current_category.id;
                                        dataStore.switchPage();
                                        await dataStore.getSubcategoryList(id)
                                    }}
                                >{dataStore.current_category.name}</Link>
                                <b>{dataStore.current_subcategory.name}</b>
                            </li>
                        }

                        {open === "product" &&
                            <li>
                                <Link to={`/category/${dataStore.current_category.id}`}
                                    onClick={async () => {
                                        dataStore.switchPage();
                                        await dataStore.getSubcategoryList(dataStore.current_category.id)
                                    }}
                                >{dataStore.current_category.name}</Link>

                                <Link to={`/subcategory/${dataStore.current_subcategory.id}`}
                                    onClick={async () => {
                                        await dataStore.getProductInSubcategory(dataStore.current_subcategory.id)
                                    }}
                                >{dataStore.current_subcategory.name}</Link>

                                <b>{dataStore.current_product.name}</b>
                            </li>
                        }
                    </ol>
                </div>
            </section>
        )
    }
});
export default NavBar;