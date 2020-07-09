import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './FullPost.sass';

const FullPost = ({ text, createdAt }) => (
  <div className="full-post">
    <div className="container">
      <Link to="/">
        <button className="btn btn-primary">Back</button>
      </Link>
      <div className="full-post__details">
        <i>Posted on {createdAt}</i>
      </div>
      <br />
      <p className="full-post__text">
			{/*Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
						Atque necessitatibus placeat delectus cumque accusamus quod quia blanditiis possimus quidem,
						inventore non soluta harum, quis dolorum distinctio! Sit nemo numquam aliquid.*/}	
				{text}</p>
    </div>
  </div>
);

export default FullPost; 