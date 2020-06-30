import { observable, decorate } from 'mobx';
import Cookie from 'mobx-cookie';

class BasketStore {

    constructor(){
        this.cookie = new Cookie('cart');
        this.array_basket = this.cookie.value ? JSON.parse(this.cookie.value) : [];
        this.sum_basket = {
            usd: 0,
            pmnt: 0,
            rub: 0,
            btc: 0,
        };
        this.priceAndSum();
    }

    addProductInBasket = (product) => {
        this.array_basket.push(product);
        this.cookie.set(this.array_basket);
        this.priceAndSum();
    };

    deleteProductInBasket(id){
        let indexProduct = basketStore.array_basket.findIndex(el => {return el.id === id});
        delete this.array_basket[indexProduct];
        this.array_basket = this.array_basket.filter((n) => { return n });
        this.cookie.set(this.array_basket);
        this.priceAndSum();
    }

    clearAllBasket(){
        this.array_basket = [];
        this.priceAndSum();
        this.cookie.remove();
    }

    priceAndSum(){
        this.sum_basket = {
            usd: 0,
            pmnt: 0,
            rub: 0,
            btc: 0,
        };

        this.array_basket.forEach(currency => {
            for (let val in this.sum_basket){
                this.sum_basket[val] += (currency.price[val] * currency.count)
            }
        });
    }

    changeCount(id, sign, val){
        let object = this.array_basket.find(el => {return el.id === id});
        switch (sign) {
            case "+":
                object.count++;
                break;
            case "-":
                if(object.count > 1) object.count--;
                break;
            case "null":
                object.count = val;
                break;
            default:
                break;
        }
        this.cookie.set(this.array_basket);
        this.priceAndSum();
    }

}

decorate(BasketStore, {
    array_basket: observable,
    sum_basket: observable,
    price_basket: observable,
    cookie: observable,
});

const basketStore = new BasketStore();
export default basketStore;
export {basketStore};