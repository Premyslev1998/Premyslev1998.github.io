import React, { Component } from 'react';
import './style.css';

/**** COMPONENT ****/
import LightboxBuy from '../Static_Component/Lightbox/Buy/';
import Specifications from './Specifications/'
import Comments from './Comments/';
import Description from "./Description";
import NavBar from '../Static_Component/NavBar';
import { Link } from 'react-router-dom';

/**** IMG ****/
import StarOnImg from '../../Static/img/product/star_b.svg';
import StarOffImg from '../../Static/img/product/star.svg';

/**** STORE ****/
import { observer } from 'mobx-react';
import modalStore from "../../Lib/Store/modalStore";
import mainStore from "../../Lib/Store/mainStore";
import dataStore from "../../Lib/Store/dataStore";
import basketStore from "../../Lib/Store/basketStore";
import lg from "../../Lib/Store/langStore";

const Product = observer(class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab_panel: {
                array: [
                    lg.translation.product.tab_panel.description,
                    lg.translation.product.tab_panel.specifications,
                    lg.translation.product.tab_panel.comments,
                ],
                active: 1
            },
            img_slider: {
                array: dataStore.current_product.photos,
                active: 0,
            },
        };
        this.tabProduct = this.tabProduct.bind(this);
        this.buyProduct = this.buyProduct.bind(this);
        this.changeImgSlider = this.changeImgSlider.bind(this);
    }

    tabProduct(index) {
        this.setState(prevState => ({
            tab_panel: {
                ...prevState.tab_panel,
                active: index
            }
        }));
    }

    changeImgSlider(index) {
        this.setState(prevState => ({
            img_slider: {
                ...prevState.img_slider,
                active: index
            }
        }));
    }

    buyProduct() {
        let checkProduct = basketStore.array_basket.filter(el => { return el.id === dataStore.current_product.id });
        if (!checkProduct.length) {
            let { name, price, id, photos } = dataStore.current_product;
            console.info(dataStore.current_product,'store')
            basketStore.addProductInBasket({ id, name, price, photos, count: 1 });
        } else {
            basketStore.changeCount(dataStore.current_product.id, "+");
        }
        modalStore.changeModalBuy();
    }

    componentWillMount() {
        mainStore.openNewPage("product");
    }

    render() {
        const {tab_panel, img_slider} = this.state;
        return (
            <div>
                <article>
                    <NavBar open={"product"} />
                    <div className="container">
                        <section className="goods_box">
                            <h1 className="product_name_title">{dataStore.current_product.name}</h1>
                            <div className="assessment">
                                <div className="star_box">
                                    {
                                        Math.round(dataStore.current_product.stars) ? [...Array(Math.round(dataStore.current_product.stars))].map((el, i) => {
                                            return <img key={i} src={StarOnImg} alt="rating" className="star" />
                                        }) : ''
                                    }
                                    {
                                        Math.round(dataStore.current_product.stars) < 5 ? [...Array(5 - Math.round(dataStore.current_product.stars))].map((el, i) => {
                                            return <img key={i} src={StarOffImg} alt="rating" className="star" />
                                        }) : ''
                                    }
                                </div>
                                <p>{lg.translation.product.ratings}: {Math.round(dataStore.current_product.stars)}</p>
                            </div>
                        </section>
                        <section className="product_row">
                            <img
                                className="photo_product_mobile"
                                src={dataStore.current_product.photos ?
                                    dataStore.current_product.photos[img_slider.active]
                                    :
                                    ""}
                                alt="product"
                            />
                            <div className="photo_slider">
                                {dataStore.current_product.photos &&
                                dataStore.current_product.photos.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div
                                                className="photo_slider_box"
                                                onClick={() => {
                                                    this.changeImgSlider(index)}
                                                }
                                            >
                                                <img src={item} alt="product" />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <img
                                className="photo_product"
                                src={dataStore.current_product.photos ? dataStore.current_product.photos[img_slider.active] : ""}
                                alt="product"
                            />
                            <div className="data_product">
                                <p className="mini_name">{dataStore.current_product.name}</p>
                                <div className="data_btn_panel">
                                    {Object.keys(dataStore.current_product).length && dataStore.current_product.custom_products.map(el => {
                                        return (
                                            <Link to={`/product/${el.id}`}>
                                                <button
                                                    key={el.id}
                                                    className="blue_button"
                                                    onClick={() => dataStore.getProduct(el.id)}
                                                >
                                                    {el.option_value.value[0].toUpperCase() + el.option_value.value.slice(1)}
                                                </button>
                                            </Link>
                                        )
                                    })}
                                </div>
                                <div className="bye_panel">
                                    <div className="price_valuta">
                                        {dataStore.current_product.price && Object.keys(dataStore.current_product.price).map((el, i) => {
                                            return (
                                                <span className="price_currency" key={i}>
                                                    {dataStore.current_product.price[el]} <i>{el}</i>
                                                </span>
                                            )
                                        })}
                                    </div>
                                    <i className="are_available">{lg.translation.category.in_stock}</i>
                                    <button
                                        className="blue_button"
                                        onClick={()=>{
                                            this.buyProduct();
                                            console.info(dataStore.current_product,'click')

                                        }
                                            }>{lg.translation.product_box.buy}
                                    </button>
                                    <LightboxBuy />
                                </div>
                            </div>
                        </section>
                    </div>
                </article>
                <article>
                    <div className="center_info_product">
                        <div className="tab_panel_prod">
                            {tab_panel.array.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => this.tabProduct(index)}
                                        className={tab_panel.active === index ? "blue_button" : ""}>
                                        {item}
                                    </button>
                                )
                            })}
                        </div>
                        {tab_panel.active === 0 && <Description />}
                        {tab_panel.active === 1 && dataStore.current_product && <Specifications />}
                        {tab_panel.active === 2 && <Comments />}
                    </div>
                </article>
            </div>
        )
    }
});
export default Product;