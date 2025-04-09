import React, { useState, useContext } from 'react';
import './Navbar.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'; // Correct path

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TechVibe
        </Link>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Shop
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
        </ul>
        <div className="navbar-cart">
          <Link to="/cart" style={{textDecoration:'none', color:'red'}}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} />
            <span className="cart-count">{getTotalCartItems()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;