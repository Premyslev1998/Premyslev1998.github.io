import React, { Component } from 'react';
import './style.css';

/**** IMG ***/
import ArrowDown from "../../../../Static/img/header_footer/arrow_down.svg";
import ArrowRight from "../../../../Static/img/header_footer/arrow_right.svg";
import ProfitLogo from "../../../../Static/img/header_footer/logo.svg";

/**** COMPONENT ****/
import LightboxCity from "../../Lightbox/City";
import Panel from "../Panel";
import LgHeader from '../LgSelected/';

/**** STORE ****/
import { observer } from "mobx-react";
import lg from "../../../../Lib/Store/langStore";
import modalStore from "../../../../Lib/Store/modalStore";
import dataStore from "../../../../Lib/Store/dataStore";

const Static = observer(class extends Component {

    render() {
        return (
            <header className="main_header">
                <section className="header_gray">
                    <div className="container">
                        <div className="city_panel">
                            <span onClick={() => modalStore.changeModalCity()} className="span_h_city">
                                {dataStore.current_location}
                                <img src={ArrowDown} alt="arrow" className="arrow_header" />
                            </span>
                            <LightboxCity />
                        </div>
                        <ol className="h_right_panel">
                            <LgHeader />
                            <img
                                src={ArrowDown} alt="arrow"
                                className="arrow_header arrow_language"
                            />
                            <span
                                className="sign_in_header"
                                onClick={() => {dataStore.handleSnackBar(true)}}
                            >
                                {lg.translation.header.sign_in}
                            </span>
                            <img src={ArrowRight} alt="arrow" className="arrow_header" />
                        </ol>
                    </div>
                </section>
                <section className="header_white">
                    <div className="container">
                        <a href="#/" className="img_header">
                            <img src={ProfitLogo} alt="logo" />
                        </a>
                        <div className="center_white_header static_chat">
                            <button onClick={() => {modalStore.changeModalForm()}}>
                                {lg.translation.all.chat_btn}
                            </button>
                        </div>
                        <div className="header_text_panel">
                            <p onClick={() => {dataStore.handleSnackBar(true)}}>
                                {lg.translation.header.info_partners}
                            </p>
                            <p><a href="mailto:proft@paymon.org">profit@paymon.org</a></p>
                        </div>
                    </div>
                </section>
                <Panel />
            </header>
        );
    }
});

export default Static;