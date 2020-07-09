import React, {Component} from 'react';
import './style.css';
import {Element} from 'react-scroll'

/** Components **/
import PizzaBox from '../StaticComponents/ProductItem/pizza';
import SnackBox from '../StaticComponents/ProductItem/snack';
import WaterBox from '../StaticComponents/ProductItem/water';
import Slider from './Slider';
import About from './About';

/** Redux **/
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/actions";
import {connect} from "react-redux";

class Home extends Component {

    componentWillMount() {
        this.props.changeCurrentPage('home');
        window.scrollTo(0,0);
    }

    render() {
        const {pizzaList, snackList, waterList} = this.props;
        return (
            <section>
                <Slider/>
                <main>
                    <Element name="anchor_pizza">
                        <h1>Вкуснейшая пицца</h1>
                    </Element>
                    <div className="product_container">
                        {pizzaList.map((el, i) => {
                            return (
                                <PizzaBox
                                    key={i}
                                    img={el.img}
                                    pizza={el.type}
                                />
                            )
                        })}
                    </div>
                    <Element name="anchor_snack">
                        <h1>Оригинальные закуски</h1>
                    </Element>
                    <div className="product_container">
                        {snackList.map((el, i) => {
                            return (
                                <SnackBox
                                    key={i}
                                    data={el}
                                />
                            )

                        })}
                    </div>

                    <Element name="anchor_water">
                        <h1>Освежающие напитки</h1>
                    </Element>
                    <div className="product_container">
                        {waterList.map((el, i) => {
                            return (
                                <WaterBox
                                    key={i}
                                    data={el}
                                />
                            )
                        })}
                    </div>

                    <Element name="anchor_about">
                        <h1>О нас</h1>
                    </Element>
                    <About/>
                </main>

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pizzaList: state.pizzaList,
        snackList: state.snackList,
        waterList: state.waterList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
