import React, {Component} from 'react';
import './style.css';

/**** COMPONENTS ****/
import Slider from '../../Slider/';
import Footer from '../FooterLightBox/';

/**** MODULE ****/
import Dialog from '@material-ui/core/Dialog';

/**** STORE ****/
import {observer} from  'mobx-react';
import modalStore from "../../../../Lib/Store/modalStore";
import lg from "../../../../Lib/Store/langStore";
import Close from "../../../../Static/img/close.svg";
import CloseMob from "../../../../Static/img/close_modal.svg";

const LightBox =  observer(class extends Component{
    render(){
        return(

            <Dialog fullScreen open={modalStore.modalBuy}>
                <div>
                    <div className="my_modal_window">
                        <section className="modal_container buy_modal">
                            <h1 className="title_modal">
                                {lg.translation.modal.buy.product_in_basket}
                                <img
                                    src={Close} alt="close_modal"
                                    className="close_modal buy_modal_cl"
                                    onClick={() => modalStore.changeModalBuy()}
                                />
                                <img
                                    src={CloseMob} alt="close_modal"
                                    className="close_modal_mobile buy_modal_cl"
                                    onClick={() => modalStore.changeModalBuy()}
                                />
                            </h1>
                            <div className="bye_panel_btn">
                                <button onClick={() => modalStore.changeModalBuy()}>
                                    {lg.translation.all.close}
                                </button>
                                <a href="#/basket" onClick={() => modalStore.changeModalBuy()}>
                                    <button className="blue_button">
                                        {lg.translation.modal.buy.go_basket}
                                    </button>
                                </a>
                            </div>
                            <Slider/>
                            <Footer/>
                        </section>
                    </div>
                </div>
            </Dialog>
        )
    }
});

export default LightBox;