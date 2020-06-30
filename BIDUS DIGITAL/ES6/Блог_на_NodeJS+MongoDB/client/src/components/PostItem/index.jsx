import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './PostItem.sass'

const PostItem = ({ title, createdAt, _id, onRemove }) => (
  <div className="post-item">
    <Link to={`/post/${_id}`}>
      <h2>{title}</h2>
    </Link>
    <p>
      <i>Posted on {createdAt}</i>
      <a href="javascript://" onClick={onRemove.bind(this, _id)}>
        Remove
      </a>
      <Link to={`/post/${_id}/edit`}>Edit</Link>
			{/*<Link to="#">Remove</Link>
			<Link to="#">Edit</Link>*/}
    </p>
  </div>
);

export default PostItem;
