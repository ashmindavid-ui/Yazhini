import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    instructions: ''
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order to a backend
    alert('Order placed successfully! We will contact you shortly.');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="checkout-container">
      <h2>Place Your Order</h2>
      
      <div style={{ marginBottom: '2rem', padding: '1rem', background: 'var(--light-bg)', borderRadius: '8px' }}>
        <h4>Order Summary</h4>
        {cartItems.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
            <span>{item.name} × {item.quantity}</span>
            <span>₹{(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div style={{ borderTop: '1px solid #DDD', paddingTop: '0.5rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', fontWeight: '600' }}>
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Delivery Address *</label>
          <textarea
            name="address"
            required
            rows="3"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>City *</label>
          <input
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Pincode *</label>
          <input
            type="text"
            name="pincode"
            required
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Special Instructions (Optional)</label>
          <textarea
            name="instructions"
            rows="2"
            value={formData.instructions}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-order-btn">
          Place Order - ₹{total.toLocaleString()}
        </button>
      </form>
    </div>
  );
};

export default Checkout;