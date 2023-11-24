import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useEffect, useRef } from 'react';
// import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Root = ({ cleanHandler }) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const previousPathnameRef = useRef();

  // // useEffect when switching between pages
  // useEffect(() => {
  //   if (previousPathnameRef.current !== location.pathname) {
  //     cleanHandler();
  //     previousPathnameRef.current = location.pathname;
  //   }
  // }, [cleanHandler, location.pathname]);
  
    return (  
        <>  
    <Header cleanHandler={cleanHandler}/>
    <Outlet/>
    <Footer/> 
       </> 
    );
}

export default Root;

