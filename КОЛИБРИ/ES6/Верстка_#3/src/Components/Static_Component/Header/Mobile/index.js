import React, {Component} from 'react';
import './style.css';

/** Component **/
import ModalMobile from '../../../Static_Component/Lightbox/MobileHeader';

/** IMG **/
import ProfitLogo from "../../../../Static/img/header_footer/logo_white.svg";
import SearchImg from "../../../../Static/img/header_footer/search.svg";
import BasketImg from "../../../../Static/img/header_footer/basket.svg";
import Burger from "../../../../Static/img/header_footer/burger.svg";

/** STORE ***/
import {observer} from 'mobx-react';
import mainStore from "../../../../Lib/Store/mainStore";
import modalStore from "../../../../Lib/Store/modalStore";
import basketStore from "../../../../Lib/Store/basketStore";
import dataStore from "../../../../Lib/Store/dataStore";

const MobileHeader = observer(class extends Component{
    render(){
        return(
            <header
                className="mobile_screen_header"
                style={{position: mainStore.scrollTop > 0 ? 'fixed' : 'static'}}
            >
                <a href="#/">
                    <img src={ProfitLogo} alt="" className="header_logo_mobile"/>
                </a>
                <div className="right_mobile_position">
                    <img
                        src={SearchImg}
                        alt="search"
                        className="icon_mobile_h"
                        onClick={() => {dataStore.handleSnackBar(true)}}
                    />
                    <a href="#/basket" className="a_by_basket">
                        <div className="basket h_tablet_icon">
                            <img src={BasketImg} alt="basket"/>
                            <span className="count_bask">{basketStore.array_basket.length}</span>
                        </div>
                    </a>
                    <span
                        className="burger"
                        onClick={() => modalStore.changeModalMobileHeader()}
                    >
                        <img src={Burger} alt="burger"/>
                    </span>
                    <ModalMobile/>
                </div>
            </header>
        )
    }
});

export default MobileHeader;