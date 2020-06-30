import React, {Component} from 'react';
import './style.css';

export default class Account extends Component{
    render(){
        return(
            <section className="tab my_profile">
                <div className="title_page">
                    <h1>Мой профиль</h1>
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
                    <div className="p_input_box">
                        <label htmlFor="">Ваша дата рождения</label>
                        <input type="text" placeholder="Дата рождения"/>
                    </div>
                </div>

                <div className="p_row_input p_row_password">
                    <div className="p_input_box">
                        <label htmlFor="">Текущий пароль</label>
                        <input type="text" placeholder="Пароль"/>
                    </div>
                    <div className="p_input_box">
                        <label htmlFor="">Новый пароль</label>
                        <input type="text" placeholder="Пароль"/>
                    </div>
                    <div className="p_input_box">
                        <label htmlFor="">Повторите новый пароль</label>
                        <input type="text" placeholder="Пароль"/>
                    </div>
                </div>
                <button className="blue_button save_edit">Сохранить изменения</button>
            </section>
        )
    }
}