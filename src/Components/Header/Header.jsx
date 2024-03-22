
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
          <h2>NavBar</h2>
          <nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
  <Link to="/posts">Posts</Link>
 
     <NavLink to="/users">Users</NavLink>





          </nav>
        </div>
    );
};

export default Header;