import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img 
            src="/images/yazhini_logo.png" 
            alt="Yazhini Collection Logo" 
            style={{ 
              height: '50px', 
              width: 'auto',
              objectFit: 'contain',
              marginRight: '10px'
            }} 
          />
          <h1 style={{ fontSize: '1.5rem', color: '#8B1A4A' }}>
            Yazhini <span style={{ color: '#C4A35A' }}>Collection</span>
          </h1>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/sarees">Sarees</Link>
          <Link to="/lehengas">Lehengas</Link>
          <Link to="/kurtis">Kurtis</Link>
          <Link to="/chudithars">Chudithars</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-icons">
          <Link to="/search" className="icon-btn">
            <Search size={22} />
          </Link>
          <Link to="/cart" className="icon-btn" style={{ position: 'relative' }}>
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>
          <button 
            className="icon-btn menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ display: 'none' }}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;