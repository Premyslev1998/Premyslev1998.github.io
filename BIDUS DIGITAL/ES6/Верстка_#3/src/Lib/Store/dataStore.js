import lang from './langStore';
import {
    getAllCategoryAPI,
    getCategoryAPI,
    getProductAPI,
    getProductListAPI,
    getRandomProductAPI,
    getSubcategoryAPI,
    getSubcategoryListAPI,
    getSubcategoryOptionsAPI,
    getProductComentsAPI,
} from '../ApiRequests/productData';
import { observable, decorate } from 'mobx';

class DataStore {

    constructor() {
        this.current_lang = lang.current_lang;
        this.current_product = {};
        this.current_product_coments=[];
        this.current_subcategory = {};
        this.current_category = {};
        this.array_product = [];
        this.array_subcategory = [];
        this.array_subcategory_options = [];
        this.array_category = [];
        this.array_rand = [];
        this.snackBarOpen = false;
        this.current_location = lang.current_lang === "ru" ? "Москва" : "Moscow";
    }

    handleSnackBar(status){
        this.snackBarOpen = status;
    }

    changeLocation(country) {
        this.current_location = `${country}`;
    }

    getCategoryList() {
        getAllCategoryAPI(this.current_lang)
            .then(res => {
                this.array_category = res.data;
            })
            .catch(err => { console.error(err) });

        getRandomProductAPI(this.current_lang, 40)
            .then(res => {
                this.array_rand = res.data;
            })
            .catch(err => { console.error(err) });
    }

    switchPage(page) {
        const array_hash = window.location.hash.split('/');
        let href_id = array_hash.pop();
        let current_page = page || array_hash.pop();
        switch (current_page) {
            case 'product':
                this.getProduct(href_id);
                break;
            case 'subcategory':
                this.current_subcategory = {};
                this.current_category = {};
                this.array_product = [];
                this.getProductInSubcategory(href_id);
                break;
            case 'category':
                this.array_subcategory = [];
                this.array_category = [];
                this.getSubcategoryList(href_id);
                break;
            default:
                break;
        }
    }

    getSubcategoryList(id) {
        getCategoryAPI(this.current_lang, id)
            .then(res => {
                document.title = `Profit: ${res.data.name}`;
                this.current_category = res.data;
            })
            .catch(err => { console.error(err) });

        getSubcategoryListAPI(this.current_lang, id)
            .then(res => {
                this.array_subcategory = res.data;
            })
            .catch(err => { console.error(err) });
    }

    getProductInSubcategory(id) {
        this.getSubcategoryOptions(id);
        getSubcategoryAPI(this.current_lang, id)
            .then(res => {
                document.title = `Profit: ${res.data.name}`;
                this.current_subcategory = res.data;
                getCategoryAPI(this.current_lang, res.data.category_id)
                    .then(res => {
                        this.current_category = res.data;
                    })
                    .catch(err => { console.error(err); });
            })
            .catch(err => { console.error(err); });

        getProductListAPI(this.current_lang, id)
            .then(res => {
                this.array_product = res.data;
            })
            .catch(err => {
                console.error(err);
            });
    }

    getProduct(id) {
        this.current_product = {};
        this.current_product_coments=[];
        getProductAPI(this.current_lang, id)
            .then(res => {
                document.title = `Profit: ${res.data.name}`;
                this.current_product = res.data;

                console.info(res.data.current_product_coments);

                this.current_subcategory = this.current_product.subcategory;
                this.current_category = this.current_product.category;
                getProductComentsAPI(this.current_lang, id)
                    .then(res =>{
                        this.current_product_coments=res.data
                    })
                    .catch(err => { console.error(err) });
            })
            .catch(err => { console.error(err) });
        window.scrollTo(0, 0);
    }

    getSubcategoryOptions(id) {
        getSubcategoryOptionsAPI(this.current_lang, id)
            .then(res => {
                this.array_subcategory_options = res.data;
            })
            .catch(err => { console.error(err) });
        window.scrollTo(0, 0);
    }

}

decorate(DataStore, {
    current_product: observable,
    current_product_coments: observable,
    current_subcategory: observable,
    current_category: observable,
    array_product: observable,
    array_subcategory: observable,
    array_category: observable,
    array_subcategory_options: observable,
    array_rand: observable,
    error_flag: observable,
    current_location: observable,
    snackBarOpen: observable,
});

const dataStore = new DataStore();
export default dataStore;
export { dataStore };
