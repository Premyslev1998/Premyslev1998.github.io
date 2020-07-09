import React, { Component } from 'react';
import Post from './components/Post';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Header, Item, Label, Image as ImageComponent, Icon, Button, Segment } from 'semantic-ui-react';

//console.log(posts); //для наглядности выводим массив - posts

class App extends Component {

	constructor(props){
		super(props);
		/*this.state = {
			data: [],
		};*/
	}

	fetchPosts(){
		const { setPosts } = this.props;
		axios
			.get('http://5d83b8e0c9e3410014071937.mockapi.io/posts')
			.then(({ data }) => {
				//console.info('SERVER DATA', data);
				//this.setState({
				//	data,
					setPosts(data);
				});			
	}

	componentWillMount(){
		this.fetchPosts();
	};



	regionText(s){
		switch(s){
			case 'ING':
				return 'Ингушетия';
			case 'DAG':
				return 'Дагестан';
			case 'CHE':
				return 'Чечня';
			default:		
		}
	}

	render() {
		//console.log(this.props);
		const { posts } = this.props;
		return (
      <Container>
				<Header as="h2">Регион: { this.regionText(this.props.regions.region) }</Header>
			  <Button.Group basic>
					<Button onClick={this.props.changeRegion.bind(this, 'ING')}>Ингушетия</Button>
					<Button onClick={this.props.changeRegion.bind(this, 'CHE')}>Чечня</Button>
					<Button onClick={this.props.changeRegion.bind(this, 'DAG')}>Дагестан</Button>
				</Button.Group>		
				<Item.Group divided>
					{!posts.length ? (
						<Segment loading>
							<br/>
							<br/>
							<br/>
						</Segment>
					) : (
						posts.map((item, key) => ( 
							<Post
								key={key}
								{...item}
							/>	
					))
					)}
				</Item.Group>		
			</Container>
    );
  }
}

const state = ({ posts, regions }) => {
	const sortedPosts = posts.items.length
	? posts.items.sort((a,b) => a.views - b.views).reverse()
	: [];
	return{
		posts: sortedPosts,
		regions,
	}; 
};

//setPosts(data);
const actions = dispatch => ({
	setPosts: data => 
		dispatch({
			type: 'SET_POSTS',
			payload: data,
		}),
	changeRegion: name => 
		dispatch({
			type: 'CHANGE_REGION',
			payload: name,
		}),	
});

export default connect(state, actions)(App);
