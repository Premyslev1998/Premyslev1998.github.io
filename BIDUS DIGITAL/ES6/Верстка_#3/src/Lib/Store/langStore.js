import { observable, decorate } from 'mobx';
import Cookie from 'mobx-cookie';

import lg_ru from '../../Static/lang/ru';
import lg_en from '../../Static/lang/en';


class LangStore {
    constructor(){
        this.cookie = new Cookie('lang');
        this.current_lang = this.cookie.value ? this.cookie.value : "ru";
        this.translation = this.current_lang === 'ru' ? lg_ru : lg_en;
        this.cookie.set(this.current_lang);
    };

    changeLang(lang){
        this.current_lang = lang;
        this.cookie.set(this.current_lang);
        this.translation = lang === 'ru' ? lg_ru : lg_en;
        window.location.reload();
    }
}

decorate(LangStore, {
    translation: observable,
    current_lang: observable
});

const langStore = new LangStore();
export default langStore;
export {langStore};