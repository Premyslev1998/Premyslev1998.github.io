import React, {Component} from 'react';
import './style.css';

export default class Address extends Component{
    render(){
        return(
            <section className="address_profile">
                <div className="title_page">
                    <h1>Адреса Доставки</h1>
                </div>
                <div className="address_panel">
                    <div className="address_box">
                        <p className="btn_address blue_color">Основной</p>
                        <p>г. Екатеринбург, ул. Гоголя, кор. А, д. 25, квартира / офис 68.</p>
                        <div className="address_edit">
                            <p>Изменить</p>
                            <p>Удалить</p>
                        </div>
                    </div>

                    <div className="address_box">
                        <p className="btn_address">Сделать основным</p>
                        <p>г. Екатеринбург, ул. Гоголя, кор. А, д. 25, квартира / офис 68.</p>
                        <div className="address_edit">
                            <p>Изменить</p>
                            <p>Удалить</p>
                        </div>
                    </div>

                    <div className="address_box">
                        <p className="btn_address">Сделать основным</p>
                        <p>г. Екатеринбург, ул. Гоголя, кор. А, д. 25, квартира / офис 68.</p>
                        <div className="address_edit">
                            <p>Изменить</p>
                            <p>Удалить</p>
                        </div>
                    </div>

                    <div className="address_box">
                        <p className="btn_address">Сделать основным</p>
                        <p>г. Екатеринбург, ул. Гоголя, кор. А, д. 25, квартира / офис 68.</p>
                        <div className="address_edit">
                            <p>Изменить</p>
                            <p>Удалить</p>
                        </div>
                    </div>

                </div>

                <div className="p_row_input">
                    <div className="p_input_box">
                        <label htmlFor="">Ваше имя</label>
                        <input type="text" placeholder="Имя"/>
                    </div>
                    <div className="p_input_box">
                        <label htmlFor="">Ваша фамилия</label>
                        <input type="text" placeholder="Фамилия"/>
                    </div>
                    <div className="p_input_box">
                        <label htmlFor="">Ваше отчество</label>
                        <input type="text" placeholder="отчество"/>
                    </div>
                </div>
                <div className="p_row_input">
                    <div className="p_input_box">
                        <label htmlFor="">Ваш мобильный телефон</label>
                        <input type="text" placeholder="Телефон"/>
                    </div>
                    <div className="p_input_box">
                        <label htmlFor="">Ваш E-mail</label>
                        <input type="text" placeholder="E-mail"/>
                    </div>
                    <div className="p_input_box add_address">
                        <button className="blue_button">Добавить адрес</button>
                    </div>
                </div>
            </section>
        )
    }
}