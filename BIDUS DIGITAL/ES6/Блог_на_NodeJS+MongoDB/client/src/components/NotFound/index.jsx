import React, { Component } from 'react'
import { Redirect } from 'react-router';

const NotFound = () => {
	return(
		<Redirect to="/" />
		/*<>
			<h1>Ничего не найдено :(</h1>
			<p>К сожалению, ничего по данному адресу не найдено.</p>	
		</>*/
	)
}

export default NotFound;