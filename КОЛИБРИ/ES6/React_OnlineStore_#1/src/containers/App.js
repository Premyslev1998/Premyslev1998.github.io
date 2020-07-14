import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import orderBy from 'lodash/orderBy';
//import * as filterActions  from '../actions/filter';
import App from '../components/App';

const sortBy = (books, filterBy) => {
	switch (filterBy){
		//case 'all':
		//	return books;
		case 'price_high':
			return orderBy(books, 'price', 'desc');
		case 'price_low':
			return orderBy(books, 'price', 'asc');
		case 'author':
			return orderBy(books, 'author', 'desc');
		default:
			return books;			
	}
};	
	const filterBooks = (books, searchQuery) => 
		books.filter(
		o => 
			o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
			o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
	);

const searchBooks = (books, filterBy, searchQuery) => {
	return sortBy(filterBooks(books, searchQuery), filterBy);
}	

const mapStateToProps = ({ books, filter }) => ({ //В качестве аргументов берутся редюсеры
	books: 
		books.items &&	
		searchBooks(books.items, filter.filterBy, filter.searchQuery), 
	isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(booksActions, dispatch),
	//...bindActionCreators(filterActions, dispatch)
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App);  