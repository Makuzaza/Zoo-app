import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
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

