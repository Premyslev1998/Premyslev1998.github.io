import { observable, decorate } from 'mobx';
import lg from './langStore';

class MainStore{
    constructor(){
        this.currentPage = "";
        this.scrollTop = 0;
    }

    changeScroll(value){
        this.scrollTop = value;
    }

    openNewPage(pageName){
        this.currentPage = pageName;
        let titleStr = "";
        if(lg.current_lang === "en"){
            switch (pageName) {
                case "basket": titleStr = "Basket"; break;
                case "home": titleStr = "Home"; break;
                default: break;
            }
        }else if(lg.current_lang === "ru"){
            switch (pageName) {
                case "basket": titleStr = "Корзина"; break;
                case "home": titleStr = "Главная"; break;
                default: break;
            }
        }
        if(pageName === "basket" || pageName === "home"){
            document.title = `Profit: ${titleStr}`;
        }
        window.scrollTo(0,0);
    }

}

decorate(MainStore, {
    currentPage: observable,
    scrollTop: observable,
});

const mainStore = new MainStore();
export default mainStore;
export {mainStore};