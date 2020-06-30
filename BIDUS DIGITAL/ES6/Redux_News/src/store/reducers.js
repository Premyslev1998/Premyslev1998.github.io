import {
    ADD_NEWS,
    LIKE_INCREMENT,
    DELETE_NEWS,
} from "./const";

const initialState = {
    news: [
        {
            id: 0,
            title: "Новость #1",
            text: "Моя новость",
            likes: 4
        },
        {
            id: 1,
            title: "Новость #2",
            text: "Моя новость",
            likes: 2
        },
        {
            id: 2,
            title: "Новость #3",
            text: "Моя новость",
            likes: 10
        },
        {
            id: 3,
            title: "Новость #4",
            text: "Моя новость",
            likes: 21
        },
        {
            id: 4,
            title: "Новость #5",
            text: "Моя новость",
            likes: 1
        },
        {
            id: 5,
            title: "Новость #6",
            text: "Моя новость",
            likes: 4
        },
        {
            id: 6,
            title: "Новость #7",
            text: "Моя новость",
            likes: 4
        }
    ]
};

export const rootReducer = (state = initialState , action) => {

    switch (action.type) {

        case ADD_NEWS:
            const newNews = {
                id: state.news.length,
                title: action.payload.title,
                text: action.payload.text,
                likes: 0
            };
            return {
                ...state,
                news: state.news.concat(newNews)
            };

        case DELETE_NEWS:
            const indexNews = state.news.findIndex(el => {
                return el.id === action.payload;
            });
            let newArray = state.news;
            delete newArray[indexNews];
            newArray  = newArray.filter(el => {return el});
            return {
                ...state,
                news: newArray
            };

        case LIKE_INCREMENT:
            const indexLikeNews = state.news.findIndex(el => {
                return el.id === action.payload;
            });
            let likeNewArray = [...state.news];
            likeNewArray[indexLikeNews].likes += 1;
            return {
                ...state,
                news: likeNewArray
            };

        default: return state;
    }
};