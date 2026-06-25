import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>Yazhini Collection</h4>
          <p>Your one-stop destination for premium ethnic wear.</p>
          <p style={{ marginTop: '0.5rem' }}>
            <Phone size={16} style={{ marginRight: '8px' }} />
            8344536967
          </p>
          <p>
            <Mail size={16} style={{ marginRight: '8px' }} />
            divyashree224@gmail.com
          </p>
        </div>
        
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link><br />
          <Link to="/sarees">Sarees</Link><br />
          <Link to="/lehengas">Lehengas</Link><br />
          <Link to="/kurtis">Kurtis</Link><br />
          <Link to="/chudithars">Chudithars</Link>
        </div>
        
        <div>
          <h4>Customer Service</h4>
          <Link to="/about">About Us</Link><br />
          <Link to="/contact">Contact Us</Link><br />
          <Link to="/cart">Cart</Link>
        </div>
        
        <div>
          <h4>Visit Us</h4>
          <p>
            <MapPin size={16} style={{ marginRight: '8px' }} />
            5, Chenthur Nagar,<br />
            Polavakalipalayam Village & Post,<br />
            Gobichettipalayam Taluk,<br />
            Pin code: 638476, Erode District
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Yazhini Collection. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;