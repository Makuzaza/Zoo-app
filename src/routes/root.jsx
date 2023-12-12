import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Root = ({ cleanHandler }) => {
  
    return (  
        <>  
    <Header/>
    <Outlet cleanHandler={cleanHandler}/>
    <Footer/> 
       </> 
    );
}

export default Root;

