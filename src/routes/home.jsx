import { NavLink } from 'react-router-dom';
import '../index.css'

function Home () {
    return (
        <main >
        <div className="home">
            <div className='columns'>
        <NavLink to='/animals'><div className="img_animals">Animals</div></NavLink>
        <NavLink to='/fishes'><div className="img_fishes">Fishes</div></NavLink>
            </div>
            <div className='columns'>
        <NavLink to='/birds'><div className="img_birds">Birds</div></NavLink>
        <NavLink to='/insects'><div className="img_insects">Insects</div></NavLink>
            </div>
        </div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
        </main>
        
    );
}

export default Home;