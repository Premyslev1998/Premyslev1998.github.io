import React, {Component} from 'react';
import './style.css';

/** IMG **/
import {animateScroll as scroll, Link} from "react-scroll/modules";
import logoImg from '../../../Static/img/logo.svg';
import connect from "react-redux/es/connect/connect";

class Footer extends Component {
    render() {
        const {currentPage} = this.props;
        return (
            <footer>
                {currentPage !== 'basket' ?
                    <div>
                        <div className="footer_line grad">Мы печёмся о Вас!</div>
                        <div className="my_container footer">
                            <div className="footer_950">
                                <a onClick={() => scroll.scrollToTop()}>
                                    <img src={logoImg} alt="logo" className="footer_logo"/>
                                </a>
                                <div className="telephone hidden_telephone">
                                    <h2>+7929292929</h2>
                                    <p className="footer_p_tel">
                                        Ежедневно с <i className="orange_color">
                                        8:30</i> до <i className="orange_color">22:00</i>
                                    </p>
                                    <a className="mail">info@podbereg.pizza.com</a>
                                </div>
                            </div>
                            <div className="footer_center">
                                <ol>
                                    <Link to="anchor_pizza" spy={true} smooth={true} offset={-92}>
                                        Пицца
                                    </Link>
                                    <Link to="anchor_snack" spy={true} smooth={true} offset={-92}>
                                        Закуски
                                    </Link>
                                    <Link to="anchor_water" spy={true} smooth={true} offset={-92}>
                                        Напитки
                                    </Link>
                                    <Link to="anchor_about" spy={true} smooth={true} offset={-92}>
                                        О нас
                                    </Link>
                                </ol>
                                <ol className="ol_footer">
                                    <li className="orange_color">© 2019 Подберег Pizza</li>
                                    <li>Правовая информация</li>
                                    <li>Колорийность и состав</li>
                                    <li>Помощь</li>
                                </ol>
                            </div>
                            <div className="footer_contact">
                                <div className="telephone">
                                    <h2>+7929292929</h2>
                                    <p className="footer_p_tel">
                                        Ежедневно с <i className="orange_color">
                                        8:30</i> до <i className="orange_color">22:00</i>
                                    </p>
                                    <a className="mail">info@podbereg.pizza.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="orange_line"/>
                        <div className="my_container footer_basket">
                            <a href="#/" className="basket_footer_logo">
                                <img src={logoImg} alt="logo"/>
                            </a>
                            <div className="footer_center">
                                <h3 className="orange_color">info@podbereg.pizza.com</h3>
                                <ol className="ol_footer">
                                    <li className="orange_color">© 2019 Подберег Pizza</li>
                                    <li>Правовая информация</li>
                                    <li>Колорийность и состав</li>
                                    <li>Помощь</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                }
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

export default connect(mapStateToProps)(Footer);