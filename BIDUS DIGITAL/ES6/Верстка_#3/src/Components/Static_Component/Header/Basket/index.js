import React, {Component} from 'react';

/**** IMG ***/
import ProfitLogo from "../../../../Static/img/header_footer/logo.svg";

/**** COMPONENT ****/
import LightboxCity from "../../Lightbox/City";
import LgHeader from '../LgSelected';


/**** STORE ****/
import {observer} from "mobx-react";
import lg from "../../../../Lib/Store/langStore";
import modalStore from "../../../../Lib/Store/modalStore";
import dataStore from "../../../../Lib/Store/dataStore";
import ArrowDownGray from "../../../../Static/img/header_footer/arrow_down_gray.svg";
import ArrowRightGray from "../../../../Static/img/header_footer/arrow_right_gray.svg";

const Basket =  observer (class extends Component{

    render() {
        return (
            <header className="main_header">

                <section className="header_white">
                    <div className="container">
                        <a href="#/" className="img_fix_header">
                            <img src={ProfitLogo} alt="logo" />
                        </a>
                        <div className="text_header_panel">
                            <div className="ot_top">
                                <a onClick={() => modalStore.changeModalCity()} className="fix_h_city">
                                    {dataStore.current_location ||lg.translation.header.city}
                                    <img src={ArrowDownGray} alt="gray" />
                                </a>
                                <LightboxCity/>
                                <div className="fix_h_in">
                                    <LgHeader/>
                                    <img src={ArrowDownGray} alt="gray" className="fix_lang"/>
                                    <span onClick={() => {dataStore.handleSnackBar(true)}}>
                                        {lg.translation.header.sign_in}
                                    </span>
                                    <img src={ArrowRightGray} alt="gray" />
                                </div>
                            </div>
                        </div>
                        <div className="chat_fix_header">
                            <button onClick={() => {modalStore.changeModalForm()}}>
                                {lg.translation.all.chat_btn}
                            </button>
                        </div>
                    </div>
                </section>

                <section className="header_gray">
                    <div className="container basket_header">
                        <span onClick={() => {dataStore.handleSnackBar(true)}}>
                            {lg.translation.header.info_partners}
                        </span>
                        <span><a href="mailto:proft@paymon.org">profit@paymon.org</a></span>
                    </div>
                </section>

            </header>
        );
    }
});

export default Basket;