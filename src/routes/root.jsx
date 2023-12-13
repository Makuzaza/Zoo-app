import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
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

