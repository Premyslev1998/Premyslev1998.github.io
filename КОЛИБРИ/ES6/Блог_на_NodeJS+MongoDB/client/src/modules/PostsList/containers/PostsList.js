import React from 'react';
import { connect } from 'react-redux';
// 1ST VARIANT OF IMPORT START //
//import PostsList from '../../../components/PostsList'; 
// 1ST VARIANT OF IMPORT END //
// 2ND VARIANT OF IMPORT START //
import { PostsList } from '../../../components';
// 2ND VARIANT OF IMPORT END //
import PostsListActions from '../actions';

class PostsListContainer extends React.Component {
  componentWillMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }
  render() {
    const { fetchRemoveItem } = this.props;
    return <PostsList items={this.props.items} onRemove={fetchRemoveItem} />;
  }
}

export default connect(
  ({ posts }) => posts,
  PostsListActions,
)(PostsListContainer);