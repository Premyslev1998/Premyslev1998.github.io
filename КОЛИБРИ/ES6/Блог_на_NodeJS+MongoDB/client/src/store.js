import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';

import rootReducer from './reducers';

/*function reducer(state, action){
	console.log(state, action);
}*/

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const middleware = composeEnhancer(applyMiddleware(thunk));

//const store = createStore(rootReducer, middleware);
const store = createStore(rootReducer, composeWithDevTools(middleware));
export default store;