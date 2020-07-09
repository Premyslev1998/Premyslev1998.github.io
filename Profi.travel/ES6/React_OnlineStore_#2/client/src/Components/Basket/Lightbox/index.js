import React, {Component} from 'react';
import './style.css';

/** MODULE **/
import Dialog from '@material-ui/core/Dialog';
import axios from "axios";

/** IMG **/
import CloseModalImg from '../../../Static/img/basket/delete_product.svg';

/** REDUX **/
import {bindActionCreators} from "redux";
import {changeModal} from "../../../Store/actions";
import connect from "react-redux/es/connect/connect";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            telephone: "",
            successSend: false,
            status: "",
        }
    }

    sendEmail() {
        const {name, email, telephone, } = this.state;
        const {basket} = this.props;

        if (!this.validateEmail(email)) {
            this.setState({status: "Введите корректную почту"});
        } else if(name === ""){
            this.setState({status: "Введите ваше имя"});
        } else if(telephone === ""){
            this.setState({status: "Введите телефон"});
        } else {
            const order = this.formatBasket();

            axios.post('http://localhost:3012/api/basket', {
                name: name,
                email: email,
                telephone: telephone,
                order: basket,
            }).then(res => {
                console.info(res);
            }).catch(err => {
                console.info("err");
                console.error(err);
            });

            axios.post('/mail', {
                name: name,
                email: email,
                telephone: telephone,
                order: order,
            }).then(res => {
                console.info(res);
                this.setState({successSend: true});
            }).catch(err => {
                console.info("err");
                console.error(err);
            });
        }
    }

    formatBasket(){
        const {basket} = this.props;
        let order = "";
        basket.map(el => {
            order += `${el.name} ${el.count} шт. Цена: ${el.price}
`;
        });
        return order;
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    componentDidMount(){
        this.formatBasket();
    }

    render() {
        const {name, email, telephone, successSend, status} = this.state;
        const {openModal, changeModal} = this.props;
        return (
            <Dialog maxWidth="sm" fullWidth={true} open={openModal} className="form_modal">
                <section className="content_form_modal">

                    <div className="flex title_modal">
                        <h4 className="orange_color">Заказ</h4>
                        <img src={CloseModalImg} alt="close" onClick={() => changeModal(false)}/>
                    </div>

                    <form className="form_suggestion" style={{display: !successSend ? 'flex' : 'none'}}>

                        <section className="input_box">
                            <label>Как можно к вам обращаться?</label>
                            <input
                                value={name}
                                type="text"
                                placeholder="ФИО"
                                onChange={(e) => this.setState({name: e.target.value})}
                            />
                        </section>
                        <section className="input_box">
                            <label>Введите Ваш номер телефона</label>
                            <input
                                value={telephone}
                                type="text"
                                placeholder="Номер телефона"
                                onChange={(e) => this.setState({telephone: e.target.value})}
                            />
                        </section>
                        <section className="input_box">
                            <label>Введите Вашу электронную почту</label>
                            <input
                                value={email}
                                type="email"
                                placeholder="E-mail"
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                        </section>
                        <button onClick={(e) => {
                            e.preventDefault();
                            this.sendEmail();
                        }}
                        >Заказать
                        </button>
                        <p className="mail_status">{status}</p>
                    </form>

                    <section className="success_form_sent" style={{
                        display: successSend ? 'flex' : 'none'
                    }}>
                        <p>Спасибо за Ваш заказ! Оператор свяжется с вами
                            в течение 10 - 20 минут для уточнения
                            дополнительной информации. Приятного аппетита!</p>
                        <button onClick={() => changeModal(false)}>
                            Закрыть
                        </button>
                    </section>
                </section>
            </Dialog>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        openModal: state.openModal,
        basket: state.basket,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeModal: bindActionCreators(changeModal, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);