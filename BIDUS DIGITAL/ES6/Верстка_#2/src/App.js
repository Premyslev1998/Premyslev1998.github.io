import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBlock from "./components/HeaderBlock";

class App extends React.Component{

	render(){
		return(
			<> 
				<div>
				<HeaderBlock />
					{/*<HeaderBlock />*/}
				</div>
			</>
		);
	}
}

export default App;