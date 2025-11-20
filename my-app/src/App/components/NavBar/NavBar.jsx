import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink 
        to="/seafood" 
        className={({ isActive }) => isActive ? "navlink active" : "navlink"}
      >
        Seafood
      </NavLink>
      
      <NavLink 
        to="/dessert" 
        className={({ isActive }) => isActive ? "navlink active" : "navlink"}
      >
        Dessert
      </NavLink>
      
      <NavLink 
        to="/vegetarian" 
        className={({ isActive }) => isActive ? "navlink active" : "navlink"}
      >
        Vegetarian
      </NavLink>
    </nav>
  );
}
