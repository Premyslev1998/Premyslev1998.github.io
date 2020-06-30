import axios from 'axios';
import qs from 'qs';

const baseUrl = '/ajax/v1';

export function getAllCategoryAPI(current_lang) {
    return axios.get(`${baseUrl}/category/get_all/?lang=${current_lang}`);
}

export function getRandomProductAPI(current_lang, count) {
    return axios.get(`${baseUrl}/product/get_rand/?count=${count}&lang=${current_lang}`);
}

export function getCategoryAPI(current_lang, id) {
    return axios.get(`${baseUrl}/category/get/?lang=${current_lang}&id=${id}`);
}

export function getSubcategoryAPI(current_lang, id) {
    return axios.get(`${baseUrl}/subcategory/get/?lang=${current_lang}&id=${id}`);
}

export function getSubcategoryListAPI(current_lang, id) {
    return axios.get(`${baseUrl}/subcategory/get_by_category/?lang=${current_lang}&id=${id}`);
}

export function getProductListAPI(current_lang, id) {
    return axios.get(`${baseUrl}/product/get_by_subcategory/?lang=${current_lang}&id=${id}`);
}

export function getProductAPI(current_lang, id) {
    return axios.get(`${baseUrl}/product/get/?lang=${current_lang}&id=${id}&type=full`);
}

export function getSubcategoryOptionsAPI(current_lang, id) {
    return axios.get(`${baseUrl}/option/get_by_subcategory/?lang=${current_lang}&id=${id}`);
}

export function getProductComentsAPI(current_lang, id) {
    return axios.get(`${baseUrl}/comment/get_by_product/?lang=${current_lang}&id=${id}`);
}

export function sendFormSubscriptionAPI(email) {
    return axios.get(`${baseUrl}/user/subscribe?email=${email}`);
}

export function feedbackAPI(email, text) {


    return axios.post(`${baseUrl}/user/suggestion_json`,
        {
                email,
                text
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
}
