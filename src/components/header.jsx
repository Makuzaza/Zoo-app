// import React from 'react';
import { NavLink } from "react-router-dom";
import '../index.css';

const Header = ({ cleanHandler }) => {

  return (
    <header>
     <h2 className="logo"><a href='/'>Zoo app</a></h2>
      <nav>
        <ul>
          <li><NavLink to='/' >Home</NavLink></li>
          <li><NavLink to='/animals' onClick={() => { cleanHandler() }}>Animals</NavLink></li>
          <li><NavLink to='/birds' onClick={() => { cleanHandler() }}>Birds</NavLink></li>
          <li><NavLink to='/fishes' onClick={() => { cleanHandler() }}>Fishes</NavLink></li>
          <li><NavLink to='/insects' onClick={() => { cleanHandler() }}>Insects</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;