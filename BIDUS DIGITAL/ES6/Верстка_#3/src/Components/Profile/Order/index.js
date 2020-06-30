import React, {Component} from 'react';
import './style.css';

export default class Order extends Component{
    render(){
        return(
            <section className="order_profile">
                <div className="title_page">
                    <h1>Мои заказы</h1>
                </div>
                <div className="order_box">
                    <p>У вас нет заказов</p>
                    <button className="blue_button">Перейти в каталог</button>
                </div>
            </section>
        )
    }
}