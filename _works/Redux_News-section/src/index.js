import React from 'react';
import ReactDOM from 'react-dom';
import {rootReducer} from './store/reducers';
import MainReducer from './containers/App';

/** REDUX **/
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <MainReducer />
    </Provider>,
    document.getElementById('root')
);