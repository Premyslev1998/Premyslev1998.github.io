import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './css/main.css';
import './sass/main.sass'

ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>,
	document.getElementById('root'),
);
//ReactDOM.render(<test />, document.getElementById('test'));

//import 'react' //1th way connection ReactJS
//window.React = require('react') //another way
