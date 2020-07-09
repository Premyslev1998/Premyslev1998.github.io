import React, { Component } from 'react';
import './style.css';

import { sendFormSubscriptionAPI } from '../../../Lib/ApiRequests/productData'

/**** IMG ****/
import ProfitLogo from '../../../Static/img/header_footer/logo.svg'
import ProfitLogoWhite from '../../../Static/img/header_footer/logo_white.svg'

/**** Store ****/
import { observer } from 'mobx-react';
import lg from "../../../Lib/Store/langStore";
import mainStore from "../../../Lib/Store/mainStore";
import dataStore from "../../../Lib/Store/dataStore";
import modalStore from "../../../Lib/Store/modalStore";

const Footer = observer(class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formValue: '',
            opacity: 0,
            width: 0,
        }
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        return (
            <footer>
                {mainStore.currentPage === "home" ?
                    <div>
                        <section className="top_footer">
                            <div className="container">
                                <a href="#/">
                                    <img src={ProfitLogo} alt="logo" />
                                </a>
                                {lg.current_lang === "ru" ?
                                    <p>
                                        Благодаря <span className="blue_color">бизнес-платформе Profit</span> оплата товара в
                                        криптовалюте станет такой же удобной, как при использовании обычных денег.<br /><br />
                                        <span className="blue_color">Для бизнеса.</span> Оплата товара в криптовалюте – это
                                        новая возможность, которая привлекает клиентов. Поэтому для любого бизнеса – это
                                        отличный маркетинговый ход. С нашей стороны, мы фиксируем цену в необходимой вам валюте,
                                        поэтому для вас нет никаких рисков.<br /><br />
                                        <span className="blue_color">Для пользователей.</span> Держатели криптовалют получат
                                        возможность использовать их в повседневной жизни, а не просто хранить на кошельке. Не
                                        нужно конвертировать или обналичивать. Достаточно просто авторизоваться в Profit,
                                        отсканировать QR-код или выбрать магазин и произвести оплату в два клика.
                                    </p>
                                    :
                                    <p>
                                        Thanks to the <span className="blue_color">business platform Profit,</span> paying
                                        for goods with cryptocurrency will be just as convenient as using fiat money.<br/><br />
                                        <span className="blue_color">For business.</span> Paying for goods in cryptocurrency
                                        is a new opportunity to attract customers. Therefore, this is an excellent marketing
                                        move for any business. For our part, we fix the price in the currency you need, so
                                        you will not face any risks.<br/><br/>
                                        <span className="blue_color">For users.</span> Cryptocurrency holders will be able
                                        to use it in everyday life and not simply store it in a wallet. No need to convert
                                        or cash out – just log into Profit, scan the QR code (or select a store) and pay
                                        in two clicks.
                                    </p>
                                }

                            </div>
                        </section>
                        <div className="subscribe_panel_home">
                            <div className="container">
                                <form
                                    className="main_form_wrap"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        sendFormSubscriptionAPI(this.state.formValue);
                                        this.setState({
                                            formValue: '',
                                            width: '100%',
                                            opacity: 1
                                        })
                                    }}
                                >
                                    <input className="mail_input"
                                           placeholder={lg.translation.footer.placeholder}
                                           value={this.state.formValue}
                                           onChange={(e) => {
                                               this.setState({
                                                   formValue: e.target.value,
                                               })
                                           }}
                                           type="email"
                                    />
                                    <div className="form_alert"
                                         style={{width: this.state.width}}
                                    >
                                        <p style={{opacity: this.state.opacity}}>Вы успешно подписались</p>
                                    </div>
                                    <div
                                        onClick={() => {
                                            if (this.validateEmail(this.state.formValue)){
                                                sendFormSubscriptionAPI(this.state.formValue);
                                                this.setState({
                                                    formValue: '',
                                                    width: '100%',
                                                    opacity: 1
                                                })
                                            }
                     
                                        }}
                                        className="submit" value="Go!"
                                        style={{
                                            visibility: this.state.opacity ?  'hidden' : ''
                                        }}>
                                        <p>Go!</p>
                                    </div>
                                </form>
                                <div className="political">
                                    <p>
                                        {lg.translation.footer.sub_info.text_1}
                                        <i>{lg.translation.footer.sub_info.href_1}</i>
                                        <b>{lg.translation.footer.sub_info.text_2}</b>
                                        <i>{lg.translation.footer.sub_info.href_2}</i>
                                    .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <section className="subscribe_panel">
                        <div className="container">
                            <a href="#/">
                                <img src={ProfitLogoWhite} alt="logo" className="f_logo" />
                            </a>
                            <form
                                className="main_form_wrap"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendFormSubscriptionAPI(this.state.formValue);
                                    this.setState({
                                        formValue: '',
                                        width: '100%',
                                        opacity: 1
                                    })
                                }}
                            >
                                <input className="mail_input"
                                       placeholder={lg.translation.footer.placeholder}
                                       value={this.state.formValue}
                                       onChange={(e) => {
                                           this.setState({
                                               formValue: e.target.value,
                                           })
                                       }}
                                       type="email"
                                />
                                <div
                                    className="form_alert"
                                    style={{width: this.state.width}}
                                >
                                    <p style={{opacity: this.state.opacity}}>Вы успешно подписались</p>
                                </div>
                                <div
                                    onClick={() => {
                                        if (this.validateEmail(this.state.formValue)){
                                        sendFormSubscriptionAPI(this.state.formValue);
                                        this.setState({
                                            formValue: '',
                                            width: '100%',
                                            opacity: 1
                                        })
                                    }
                                    }}
                                    className="submit"
                                    style={{
                                        visibility: this.state.opacity ?  'hidden' : ''
                                    }}
                                    >
                                    <p>Go!</p>
                                </div>
                            </form>

                            <div className="political">
                                <p>
                                    {lg.translation.footer.sub_info.text_1}
                                    <i>{lg.translation.footer.sub_info.href_1}</i>
                                    <b>{lg.translation.footer.sub_info.text_2}</b>
                                    <i>{lg.translation.footer.sub_info.href_2}</i>
                                    .</p>
                            </div>
                        </div>
                    </section>

                }
                <section className="footer_center">
                    <div className="container">
                        <div className="f_left_panel">
                            <button onClick={() => {modalStore.changeModalForm()}}>
                                {lg.translation.all.chat_btn}
                            </button>
                            <a href="mailto:profit@paymon.org">profit@paymon.org</a>
                        </div>
                        <nav className="footer_columns">
                            {/*<ol className="f_section">*/}
                                {/*<li><h5 className="blue_color">{lg.translation.footer.columns.about_company}</h5></li>*/}
                                {/*<li><a href="#/">Контакты</a></li>*/}
                                {/*<li><a href="#/">Обратная связь</a></li>*/}
                            {/*</ol>*/}
                            {/*<ol className="f_section">*/}
                                {/*<li><h5 className="blue_color">{lg.translation.footer.columns.help}</h5></li>*/}
                                {/*<li><a href="#/">Доставка и оплата</a></li>*/}
                                {/*<li><a href="#/">Возврат</a></li>*/}
                                {/*<li><a href="#/">Гарантии</a></li>*/}
                            {/*</ol>*/}
                            <ol className="f_section">
                                <li><h5 className="blue_color">{lg.translation.footer.columns.catalog}</h5></li>
                                {dataStore.array_category.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={`#/category/${item.id}`}
                                                onClick={() => { dataStore.getSubcategoryList(item.id) }}>
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ol>
                        </nav>
                    </div>
                </section>
                <section className="footer_bottom">
                    <div className="container">
                        <ul className="f_last_line">
                            <li className="hidden_profit_by">© 2019 Profit by Paymon</li>
                            <li>
                                <a href="#/">{lg.translation.all.privacy_policy}</a>
                            </li>
                            <li>
                                <a href="#/">{lg.translation.all.terms_of_use}</a>
                            </li>
                            <li>
                                <a href="#/">{lg.translation.all.public_offer}</a>
                            </li>
                        </ul>
                    </div>
                    <p className="bottom_profit">© 2019 Profit by Paymon</p>
                </section>
            </footer>
        )
    }
});

export default Footer;