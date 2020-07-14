import React, { Component } from 'react';
import { Container, CardGroup } from 'semantic-ui-react';
import axios from 'axios'; 
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import { Card } from 'semantic-ui-react';


class App extends Component {
	componentWillMount(){
		const { setBooks } = this.props;
		axios.get('/books.json').then(({ data }) => {
			setBooks(data);
		});
	}

	render(){
		const { books, isReady } = this.props;
		return(
			<Container>
				<Menu />
				<Filter />
				<CardGroup itemsPerRow={4}>
					{!isReady	? 'Загрузка...' : books.map((book, i) => <BookCard key={i} {...book} />)}
				</CardGroup>
			</Container>
		);
	}
}

export default App; 

