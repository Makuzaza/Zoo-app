import { Link } from "react-router-dom";
import '../index.css';

const Header = ({ cleanHandler }) => {

  return (
    <header>
     <h2 className="logo"><a href='/'>Zoo app</a></h2>
      <nav>
        <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/animals' onClick={() => { cleanHandler() }}>Animals</Link></li>
          <li><Link to='/birds' onClick={() => { cleanHandler() }}>Birds</Link></li>
          <li><Link to='/fishes' onClick={() => { cleanHandler() }}>Fishes</Link></li>
          <li><Link to='/insects' onClick={() => { cleanHandler() }}>Insects</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;