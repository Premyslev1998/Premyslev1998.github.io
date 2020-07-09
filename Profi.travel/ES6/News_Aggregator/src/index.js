import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
//import * as serviceWorker from './serviceWorker';

import store from './store';
import './styles/index.css';
import './styles/semantic.min.css';

//console.log(store);

/*store.subscribe(() => {
	alert('Стора изменилась!');
})*/

/*setTimeout(() => {
	console.log(store.getState());
});*/

/*setTimeout(() => {
	store.dispatch({
		type: 'qwe',
	});
	console.log(store.getState());
}, 1000);*/

render(
	<Provider store={store}>
		<App />
	</Provider>,	 
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
