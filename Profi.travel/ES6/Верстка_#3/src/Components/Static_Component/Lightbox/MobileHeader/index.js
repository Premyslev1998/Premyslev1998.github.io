import React, {Component} from 'react';
import './style.css';

/** Components **/
import LgHeader from '../../Header/LgSelected';

/**** Module ****/
import Dialog from '@material-ui/core/Dialog';

/**** Img ****/
import Close from "../../../../Static/img/close.svg";
import ArrowGrayImg from "../../../../Static/img/header_footer/arrow_down_gray.svg";
import ArrowGrayRightImg from "../../../../Static/img/header_footer/arrow_right_gray.svg";

/**** Store ****/
import {observer} from 'mobx-react';
import lg from "../../../../Lib/Store/langStore";
import modalStore from "../../../../Lib/Store/modalStore";
import dataStore from "../../../../Lib/Store/dataStore";
import CloseMob from "../../../../Static/img/close_modal.svg";

const MobileHeader = observer (class extends Component {
    render(){
        return(
            <Dialog fullScreen open={modalStore.modalMobileHeader}>
                <div>
                    <div className="h_mob_content">
                        <div>
                            <div className="h_mob_top">
                                <div className="left_mob_top">
                                    <a href="#"
                                       onClick={() => modalStore.changeModalCity()}
                                    >
                                        {dataStore.current_location}
                                    </a>
                                    <img src={ArrowGrayImg} alt="arrow"/>
                                    <LgHeader/>
                                    <img src={ArrowGrayRightImg} alt="arrow" className="arrow_lg_mob"/>
                                </div>
                                <div>
                                    <img
                                        src={Close} alt="close_modal"
                                        className="close_modal buy_modal_cl"
                                        onClick={() => modalStore.changeModalMobileHeader()}
                                    />
                                    <img
                                        src={CloseMob} alt="close_modal"
                                        className="close_modal_mobile buy_modal_cl"
                                        onClick={() => modalStore.changeModalMobileHeader()}
                                    />
                                </div>
                            </div>

                            <div className="h_mob_category">
                                {dataStore.array_category.map((item, index) => {
                                    return(
                                        <a href={`#/category/${item.id}`} key={index}
                                           onClick={() => {
                                               dataStore.getSubcategoryList(item.id);
                                               modalStore.changeModalMobileHeader();
                                           }}>
                                            {item.name}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="h_mob_bottom">
                            <div className="h_mob_info">
                                <a href="#">{lg.translation.header.countries}</a>
                                <a href="#">{lg.translation.header.shipping}</a>
                                <a href="#">{lg.translation.header.info_partners}</a>
                                <a href="mailto:proft@paymon.org">profit@paymon.org</a>
                            </div>
                            <div className="h_mob_sign">
                                <a href="#">{lg.translation.modal.mob_header.lk}</a>
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        )
    }
});

export default MobileHeader;