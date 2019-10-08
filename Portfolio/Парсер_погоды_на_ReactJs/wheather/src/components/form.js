import React from "react";

// С оптимизацией //
const Form = props => (
	<form onSubmit={props.weatherMethod}>
		<input type="text" name="city" placeholder="Город"></input> 
		<button>Получить погоду</button>
	</form>
)

// Без оптимизации //
/*class Form extends React.Component{
	render(){

		return(    
			<form onSubmit={this.props.weatherMethod}>
				<input type="text" name="city" placeholder="Город"></input> 
				<button>Получить погоду</button>
			</form>
		);
	}
}*/

export default Form;