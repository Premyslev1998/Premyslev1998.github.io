import React, { Component } from 'react';
import './style.css';
import { feedbackAPI } from '../../../../Lib/ApiRequests/productData'

/**** Component ****/

/**** Module ****/
import Dialog from '@material-ui/core/Dialog';

/**** Img ****/
import Close from "../../../../Static/img/close.svg";

/**** Store ****/
import { observer } from 'mobx-react';
import lg from "../../../../Lib/Store/langStore";
import modalStore from "../../../../Lib/Store/modalStore";
import CloseMob from "../../../../Static/img/close_modal.svg";

const Form = observer(class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            formText: '',
            successSend: 0
        }
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        return (
            <Dialog fullWidth="md" open={modalStore.modalForm} className="form_modal" >
                <section className="content_form_modal">
                    <h1 className="title_modal">
                        {lg.translation.modal.form.name_form}
                        <img
                            src={Close} alt="close_modal"
                            className="close_modal buy_modal_cl"
                            onClick={() => modalStore.changeModalForm()}
                        />
                        <img
                            src={CloseMob} alt="close_modal"
                            className="close_modal_mobile buy_modal_cl"
                            onClick={() => modalStore.changeModalForm()}
                        />
                    </h1>
                    <form className="form_suggestion" style={{
                        display: !this.state.successSend ? 'flex' : 'none'
                    }}>
                        <label htmlFor="">{lg.translation.modal.form.label_1}</label>
                        <input
                            type="email"
                            placeholder={lg.translation.modal.form.placeholder_1}
                            onChange={(e) => {
                                this.setState({
                                    email: e.target.value,
                                })
                            }}
                        />
                        <label htmlFor="">{lg.translation.modal.form.label_2}</label>
                        <textarea
                            placeholder={lg.translation.modal.form.placeholder_2}
                            onChange={(e) => {
                                this.setState({
                                    formText: e.target.value,
                                })
                            }}
                        />
                        <button className="blue_button"
                            onClick={(e) => {
                                e.preventDefault()
                                if (this.validateEmail(this.state.email)) {
                                    feedbackAPI(this.state.email, this.state.formText).then(() => {
                                        this.setState({
                                            successSend: 1
                                        })
                                        // modalStore.changeModalForm()
                                    })
                                        .catch((err, data) => console.info(err, data))

                                }
                            }}
                        >
                            {lg.translation.modal.form.btn_form}
                        </button>
                    </form>
                    <section className="success_form_sent" style={{
                        display: this.state.successSend ? 'flex' : 'none'
                    }}>
                        <p>{lg.translation.modal.form.success}</p>
                        <button
                            onClick={() => modalStore.changeModalForm()}
                            className="blue_button"
                        >
                            {lg.translation.all.close}
                        </button>
                    </section>

                </section>
            </Dialog>
        )
    }
});

export default Form;