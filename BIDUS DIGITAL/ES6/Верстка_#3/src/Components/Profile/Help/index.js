import React, {Component} from 'react';
import './style.css';

export default class Help extends Component{
    render(){
        return(
            <section className="help_profile">
                <div className="title_page">
                    <h1>Помощь</h1>
                </div>
                <h5>Выберите тип обращения</h5>
                <div className="type_help">
                    <button>Вопрос</button>
                    <button className="blue_button">Благодарность</button>
                    <button>Жалоба</button>
                </div>
                <div className="form_help">
                    <div className="column_form">
                        <h5>Тема обращения</h5>
                        <input type="text" placeholder="Напишите тему"/>
                        <h5>Загрузите файл</h5>
                        <button className="blue_button">Загрузить</button>
                    </div>
                    <div className="column_form">
                        <h5>Выберите тип обращения</h5>
                        <textarea placeholder="Введите текст сообщения"/>
                    </div>
                </div>
                <button className="blue_button send_help_form">Отправить</button>
            </section>
        )
    }
}