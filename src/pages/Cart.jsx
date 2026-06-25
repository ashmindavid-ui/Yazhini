import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Your Cart is Empty</h2>
        <p style={{ margin: '1rem 0', color: 'var(--gray-text)' }}>Start shopping to add items to your cart</p>
        <button className="checkout-btn" style={{ maxWidth: '200px', margin: '0 auto' }} onClick={() => navigate('/')}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container cart-container">
      <h2 className="section-title">Your <span>Cart</span></h2>
      
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <div className="price">₹{item.price.toLocaleString()}</div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <Minus size={16} />
              </button>
              <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <Plus size={16} />
              </button>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ marginLeft: '1rem', color: '#FF4444' }}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
          <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>
            ₹{(item.price * item.quantity).toLocaleString()}
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span>Shipping</span>
          <span style={{ color: 'green' }}>Free</span>
        </div>
        <div className="total">
          Total: ₹{total.toLocaleString()}
        </div>
        <button className="checkout-btn" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;