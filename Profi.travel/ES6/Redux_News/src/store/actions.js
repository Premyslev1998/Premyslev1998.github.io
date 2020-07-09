import {
    ADD_NEWS,
    LIKE_INCREMENT,
    DELETE_NEWS,
} from "./const";

export const likeIncrement = (id) => {
    return {
        type: LIKE_INCREMENT,
        payload: id
    }
};

export const addNews = (news) => {
    return {
        type: ADD_NEWS,
        payload: news
    }
};

export const deleteNews = (id) => {
    return {
        type: DELETE_NEWS,
        payload: id
    }
};