import { Link } from 'react-router-dom';
import '../index.css'

function Home () {
    return (
        <main >
        <div className="home">
        <Link to='/animals'><div className="img_animals">Animals</div></Link>
        <Link to='/birds'><div className="img_birds">Birds</div></Link>
        <Link to='/fishes'><div className="img_fishes">Fishes</div></Link>
        <Link to='/insects'><div className="img_insects">Insects</div></Link>
        </div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
        </main>
        
    );
}

export default Home;