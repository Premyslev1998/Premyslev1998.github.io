import React, { Component } from 'react';
import '../style.css';
import './style.css';

/**** MODULE ****/
import Dialog from '@material-ui/core/Dialog';
import { getLocation } from '../../../../Lib/Functions/location'
import Input from './Autosuggest_Input'

/**** IMG ****/
import Close from '../../../../Static/img/close.svg';

/**** STORE ****/
import { observer } from 'mobx-react';
import lg from "../../../../Lib/Store/langStore";
import modalStore from "../../../../Lib/Store/modalStore";
import dataStore from '../../../../Lib/Store/dataStore';
import CloseMob from "../../../../Static/img/close_modal.svg";

const LightBox = observer(class LightBox extends Component {

    componentWillMount = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            let crd = pos.coords;
            getLocation(crd.latitude,crd.longitude,lg.current_lang)
                .then(res => {
                    const response = res.data;
                    let location = response.results.reverse()[2].address_components;
                    console.info(location[0].long_name.split(' '),'location');
                    dataStore.changeLocation(location[0].long_name.split(' ')[1]);
                    modalStore.changeCity(location[0].long_name.split(' ')[1]);
                }
            )
        });
    };

    render() {
        return (
            <Dialog fullScreen open={modalStore.modalCity}>
                <div>
                    <div className="my_modal_window">
                        <section className="modal_container">
                            <h1 className="title_modal">
                                {lg.translation.modal.city.take_city}
                                <img
                                    src={Close} alt="close_modal"
                                    className="close_modal buy_modal_cl"
                                    onClick={() => modalStore.changeModalCity()}
                                />
                                <img
                                    src={CloseMob} alt="close_modal"
                                    className="close_modal_mobile buy_modal_cl"
                                    onClick={() => modalStore.changeModalCity()}
                                />
                            </h1>
                            <p className="my_city_p">
                                {lg.translation.modal.city.your_city}
                                <span className="blue_color">
                                    {modalStore.defaultCity}
                                </span>?
                            </p>
                            <button
                                className="blue_button"
                                onClick={() => modalStore.changeModalCity()}
                            >{lg.translation.modal.city.enter_btn}
                            </button>
                            <ol className="city_list_modal">
                                {
                                    modalStore.cityList.map((el, i) => {
                                        return (
                                            <li key={i}>
                                                <a onClick={() => {
                                                    dataStore.changeLocation(el);
                                                    modalStore.changeCity(el);
                                                }}>
                                                    {el}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                            {/*<p className="my_city_p">{lg.translation.modal.city.write_city}</p>*/}
                            {/*<div className="enter_city">*/}
                                {/*<Input />*/}
                                {/*<button*/}
                                    {/*className="blue_button"*/}
                                    {/*onClick={() => {*/}
                                        {/*if (Boolean(modalStore.suggestedCity.trim())) {*/}
                                            {/*modalStore.changeCity(modalStore.suggestedCity);*/}
                                            {/*dataStore.changeLocation(modalStore.suggestedCity);*/}
                                        {/*}*/}
                                    {/*}}*/}
                                {/*>*/}
                                    {/*{lg.translation.modal.city.choose_btn}*/}
                                {/*</button>*/}
                            {/*</div>*/}
                        </section>
                    </div>
                </div>
            </Dialog>
        )
    }
});

export default LightBox;