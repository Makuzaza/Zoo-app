import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Root = ({ cleanHandler }) => {
  const location = useLocation();
  const previousPathnameRef = useRef();

  useEffect(() => {
    if (previousPathnameRef.current !== location.pathname) {
      cleanHandler();
      previousPathnameRef.current = location.pathname;
    }
  }, [cleanHandler, location.pathname]);
  
    return (  
        <>  
    <Header/>
    <Outlet cleanHandler={cleanHandler}/>
    <Footer/> 
       </> 
    );
}

export default Root;

