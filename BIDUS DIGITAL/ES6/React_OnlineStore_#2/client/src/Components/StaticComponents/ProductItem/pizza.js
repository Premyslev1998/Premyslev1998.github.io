import React, {Component} from 'react';
import './style.css';

/** Module **/
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {addProduct} from "../../../Store/actions";

class PizzaItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
            tabArr: ['25 см', '35 см'],
        };
    }

    render() {
        const {img, pizza} = this.props;
        const {tab, tabArr} = this.state;
        return (
            <div className="product_box">
                <div>
                    <img src={img} alt="pizza"/>
                    <h4>{pizza[0].name}</h4>
                    {tab === 0 && <p>{pizza[0].description.replace(/\s/g," ")}</p>}
                    {tab === 1 && <p>{pizza[1].description.replace(/\s/g," ")}</p>}
                </div>
                <div>
                    <div className="size_panel">
                        {tabArr.map((el, i) => {
                            return (
                                <span
                                    key={i}
                                    className={tab === i ? 'active_tab' : ""}
                                    onClick={() => this.setState({tab: i})}
                                >{el}</span>
                            )
                        })}
                    </div>
                    {tab === 0 &&
                        <div className="price_panel">
                            <h6>{pizza[0].price} руб</h6>
                            <button
                                className="grad buy"
                                onClick={() => this.props.addProduct(pizza[0])}
                            >В корзину</button>
                        </div>
                    }
                    {tab === 1 &&
                        <div className="price_panel">
                            <h6>{pizza[1].price} руб</h6>
                            <button
                                className="grad buy"
                                onClick={() => this.props.addProduct(pizza[1])}
                            >В корзину</button>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: bindActionCreators(addProduct, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaItem );