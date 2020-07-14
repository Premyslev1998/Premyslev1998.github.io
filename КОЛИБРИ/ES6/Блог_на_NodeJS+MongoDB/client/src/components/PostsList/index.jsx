import React, { Component } from 'react';
import PostItem from '../PostItem/index.jsx';

import './PostsList.sass';

const PostsList = ({ items, onRemove }) => {
  return (
    <div className="post-items">
			{/*{posts.map(post => (
					<PostItem {...post} />
				))}*/}
      {items ? items.map(post => <PostItem {...post} onRemove={onRemove} />) : 'Loading...'}
    </div>
  );
};
				
export default PostsList;


