import { observable, decorate } from 'mobx';
import lg from "./langStore";

class ModalStore {
    constructor() {
        this.modalCity = false;
        this.modalBuy = false;
        this.modalForm = false;
        this.modalMobileHeader = false;

        this.cityList = lg.current_lang === "ru" ?
            [
                "Москва",
                "Санкт-Петербург",
                "Новосибирск",
                "Екатеринбург",
                "Нижний Новгород",
                "Казань",
                "Челябинск",
                "Омск",
                "Самара",
                "Ростов-на-Дону",
            ] :
            [
                "Moscow",
                "St. Petersburg",
                "Novosibirsk",
                "Yekaterinburg",
                "Nizhny Novgorod",
                "Kazan",
                "Chelyabinsk",
                "Omsk",
                "Samara",
                "Rostov-on-Don",
            ];
        this.defaultCity = lg.current_lang === "ru" ? 'Москва' : 'Moscow';
        this.suggestedCity = '';
    }

    handleSuggestedCity(value) {
        return this.suggestedCity = value;
    }

    changeCity(value) {
        return this.defaultCity = value;
    }

    changeModalCity() { return this.modalCity = !this.modalCity }
    changeModalBuy()  { return this.modalBuy = !this.modalBuy }
    changeModalMobileHeader()   { return this.modalMobileHeader  = !this.modalMobileHeader}
    closeModalBuy()   { return this.modalBuy = false }
    changeModalForm() { return this.modalForm = !this.modalForm }
}

decorate(ModalStore, {
    modalForm: observable,
    modalCity: observable,
    modalBuy: observable,
    cityList: observable,
    defaultCity: observable,
    modalMobileHeader: observable,
});

const modalStore = new ModalStore();
export default modalStore;
export { modalStore };