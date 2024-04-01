// Header.js
import React from 'react';
import { Link } from 'react-router-dom'

import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div id="header1">
        <div className="menu">
          <span>Learning By Doing</span>
          <i className="fa-solid fa-phone"></i>
          <a href="tel:02862678999">(028)62678999</a>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:lienhe@ispace.edu.vn">lienhe@ispace.edu.vn</a>
        </div>
      </div>
       <Navigation /> 
    </header>
  );
};

export default Header;
