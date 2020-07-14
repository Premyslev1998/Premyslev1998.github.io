import React, {Component} from 'react';

/** Module **/
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {addProduct} from "../../../Store/actions";

class SnackItem extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="product_box">
                <img src={data.img} alt="pizza"/>
                <h4>{data.name}</h4>
                <p>{data.description}</p>
                <div className="price_panel">
                    <h6>{data.price} руб</h6>
                    <button className="grad buy"
                            onClick={() => this.props.addProduct(data)}
                    >В корзину</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SnackItem);