import React, {Component} from 'react';
import './style.css'

/**** Component ****/
import NavBar from '../Static_Component/NavBar/';

/**** IMG ****/

/**** Store ****/
import {observer} from  'mobx-react';

/**** STORE ****/
import mainStore from "../../Lib/Store/mainStore";
import dataStore from "../../Lib/Store/dataStore";

const Catalog = observer (class extends Component{

    componentWillMount(){
        mainStore.openNewPage("catalog");
    }

    componentDidUpdate(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <article>
                <NavBar open={'category'}/>
                <div className="container">
                    <div className="title_page">
                        <h1>{dataStore.current_category.name}</h1>
                    </div>
                    <div className="catalog_box">
                    {dataStore.array_subcategory && dataStore.array_subcategory.map((item, index) => {
                        return(
                            <a
                                href={`#/subcategory/${item.id}`}
                                onClick={() => {dataStore.getProductInSubcategory(item.id)}}
                                className="product_catalog" key={index}>
                                <div>
                                    <img src={item.photo || 'ProductImg'} alt="product"/>
                                </div>
                                <b>{item.name}</b>
                            </a>
                        )
                    })}
                    </div>
                </div>
            </article>
        )
    }
});

export default Catalog;
