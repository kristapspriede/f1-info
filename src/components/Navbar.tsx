import { Link } from 'react-router-dom';
import '../styles/Navbar.scss'; // Assuming you have a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand titillium-web-regular">F1 Info</div>
      <div className="navbar-links">
        <Link to="/races">Races</Link>
        <Link to="/">Drivers</Link>
        <Link to="/constructors">Constructors</Link>
      </div>
    </nav>
  );
}

export default Navbar;