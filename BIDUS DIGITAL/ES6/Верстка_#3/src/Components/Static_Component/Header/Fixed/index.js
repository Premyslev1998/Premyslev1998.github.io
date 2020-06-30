import React, { Component } from 'react';
import './style.css';

/**** IMG ****/
import ProfitLogo from "../../../../Static/img/header_footer/logo.svg";
import ProfitLogoWhite from "../../../../Static/img/header_footer/logo_white.svg";
import ArrowDownGray from "../../../../Static/img/header_footer/arrow_down_gray.svg";
import ArrowDown from "../../../../Static/img/header_footer/arrow_down.svg";
import ArrowRightGray from "../../../../Static/img/header_footer/arrow_right_gray.svg";
import ArrowRight from "../../../../Static/img/header_footer/arrow_right.svg";
import SearchImg from "../../../../Static/img/header_footer/search.svg";
import BasketImg from "../../../../Static/img/header_footer/basket.svg";

/**** COMPONENTS ****/
import Panel from "../Panel";
import LgHeader from '../LgSelected';

/**** STORE ****/
import { observer } from 'mobx-react';
import mainStore from "../../../../Lib/Store/mainStore";
import modalStore from "../../../../Lib/Store/modalStore";
import lg from "../../../../Lib/Store/langStore";
import dataStore from "../../../../Lib/Store/dataStore";
import basketStore from "../../../../Lib/Store/basketStore";

const Fixed = observer(class Fixed extends Component {

    render() {
        return (
            <header
                className="fixed_header"
                style={{ display: mainStore.scrollTop > 110 ? 'block' : 'none' }}
            >
                <div className="header_up_to_950">
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
                                    <div className="fix_h_in">
                                        <LgHeader/>
                                        <img src={ArrowDownGray} alt="gray" className="fix_lang"/>
                                        <span onClick={() => {dataStore.handleSnackBar(true)}}>
                                            {lg.translation.header.sign_in}
                                            <img src={ArrowRightGray} alt="gray" />
                                        </span>
                                    </div>
                                </div>
                                <div className="fix_info_h">
                                    <p onClick={() => {dataStore.handleSnackBar(true)}}>
                                        {lg.translation.header.info_partners}
                                    </p>
                                    <a href="mailto:proft@paymon.org">profit@paymon.org</a>
                                </div>
                            </div>
                            <div className="chat_fix_header">
                                <button onClick={() => {modalStore.changeModalForm()}}>
                                    {lg.translation.all.chat_btn}
                                </button>
                            </div>
                        </div>
                    </section>
                    <Panel />
                </div>
                <div className="header_after_950">
                    <a href="#/">
                        <img src={ProfitLogoWhite} alt="" className="h_tablet_logo" />
                    </a>
                    <div className="h_tablet_panel">
                        <div className="h_tablet_top_line">
                            <div className="h_left_pos">
                                <div className="h_left_pos">
                                    <a onClick={() => modalStore.changeModalCity()}>
                                        {lg.translation.header.city}
                                        <img src={ArrowDown} alt="arrow" className="arrow_header"/>
                                    </a>
                                </div>
                                <div className="h_left_pos">
                                    <LgHeader/>
                                    <img src={ArrowDown} alt="arrow" className="arrow_header"/>
                                </div>
                            </div>
                            <div>
                                <a href="mailto:proft@paymon.org">profit@paymon.org</a>
                                <b onClick={() => {dataStore.handleSnackBar(true)}}>
                                    {lg.translation.header.sign_in}
                                </b>
                                <img src={ArrowRight} alt="arrow" className="arrow_header"/>
                            </div>
                        </div>
                        <div className="h_tablet_bottom_line">
                            <div className="h_tablet_category">
                                <img
                                    src={SearchImg}
                                    alt="search"
                                    className="h_tablet_icon"
                                    onClick={() => {dataStore.handleSnackBar(true)}}
                                />
                                {dataStore.array_category.map((item, index) => {
                                    return (
                                        <a href={`#/category/${item.id}`} key={index}
                                            onClick={() => { dataStore.getCategoryInfo(item.id) }}>
                                            {item.name}
                                        </a>
                                    )
                                })}
                            </div>
                            <a href="#/basket" className="a_by_basket">
                                <div className="basket h_tablet_icon">
                                    <img src={BasketImg} alt="basket"/>
                                    <span className="count_bask">{basketStore.array_basket.length}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
});

export default Fixed;