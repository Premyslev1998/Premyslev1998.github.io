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

const initialState = {
    pizzaList: [],
    snackList: [],
    waterList: [],
    basket: [],
    currentPage: "",
    openModal: false,
};

export const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.payload};

        case GET_PIZZA_LIST :
            return {
                ...state,
                pizzaList: action.payload,
            };

        case GET_SNACK_LIST :
            return {
                ...state,
                snackList: action.payload,
            };

        case GET_WATER_LIST :
            return {
                ...state,
                waterList: action.payload,
            };

        case CHANGE_COUNT_PRODUCT:
            const indexProduct = state.basket.findIndex((pizza) => {
                return pizza._id === action.payload._id;
            });
            let basketArray = [...state.basket];
            if (action.payload.act === 'inc') {
                basketArray[indexProduct].count += 1;
            } else {
                if (basketArray[indexProduct].count > 1) basketArray[indexProduct].count -= 1;
            }
            return {
                ...state,
                basket: basketArray,
            };

        case ADD_PRODUCT:
            const {_id, name, size, price} = action.payload;
            const productIndex = state.basket.findIndex((product) => {
                return product._id === _id;
            });
            if (productIndex !== -1) {
                let basketArray = [...state.basket];
                basketArray[productIndex].count += 1;
                return {
                    ...state,
                    basket: basketArray,
                };
            } else {
                const addProduct = {
                    _id: _id,
                    name: name,
                    size: size,
                    price: price,
                    count: 1,
                };
                return {
                    ...state,
                    basket: state.basket.concat(addProduct),
                };
            }

        case DELETE_PRODUCT:
            let indexDeleteProduct = state.basket.findIndex(el => {
                return el._id === action.payload._id
            });
            let cloneBasket = [...state.basket];
            delete cloneBasket[indexDeleteProduct];
            cloneBasket = cloneBasket.filter((n) => { return n });
            return {
                ...state,
                basket: cloneBasket,
            };

        case CHANGE_MODAL_VUE:
            return {
                ...state,
                openModal: action.payload,
            };

        default:
            return state;
    }

};