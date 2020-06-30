import {
    GET_PIZZA_LIST,
    GET_SNACK_LIST,
    GET_WATER_LIST,
    CHANGE_CURRENT_PAGE,
    ADD_PRODUCT,
    CHANGE_COUNT_PRODUCT,
    DELETE_PRODUCT,
    CHANGE_MODAL_VUE,
} from "./const";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
};

export const getPizzaList = (pizzaList) => {
    return {
        type: GET_PIZZA_LIST,
        payload: pizzaList
    }
};

export const getSnackList = (snackList) => {
    return {
        type: GET_SNACK_LIST,
        payload: snackList
    }
};

export const getWaterList = (waterList) => {
    return {
        type: GET_WATER_LIST,
        payload: waterList
    }
};


export const changeCurrentPage = (page) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: page
    }
};

export const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
        payload: product
    }
};

export const changeCountProduct = (indexPizza) => {
    return {
        type: CHANGE_COUNT_PRODUCT,
        payload: indexPizza
    }
};

export const changeModal = (bool) => {
    return {
        type: CHANGE_MODAL_VUE,
        payload: bool
    }
};