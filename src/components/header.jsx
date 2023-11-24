// import React from 'react';
import { NavLink } from "react-router-dom";

const Header = ({ clearHandler }) => {
  return (
    <header>
      <a href='/'><h2>Zoo app</h2></a>
      <nav>
        <ul>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/animals' onClick={clearHandler}>Animals</NavLink></li>
       <li><NavLink to='/birds' onClick={clearHandler}>Birds</NavLink></li>
       <li><NavLink to='/about'>About</NavLink></li>
        </ul>
       </nav>
      {/* <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={searchHandler}
      /> */}
    </header>
  );
};

export default Header;
