import React, { Component } from 'react';
import 'react-bootstrap'; 
import './HeaderBlock.sass';
//import { render } from 'node-sass';

const HeaderBlock = ({ title, description, imageUrl }) => {
  return (
    <div className="header-block" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="container">
        <div className="header-block__overlay" />
        <div className="header-block__center">
          <h1>{title}</h1>
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
