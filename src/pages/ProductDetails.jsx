import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ArrowLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')}>Go Back Home</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <button className="slider-btn" style={{ position: 'relative', marginBottom: '2rem' }} onClick={() => navigate(-1)}>
        <ArrowLeft size={24} /> Back
      </button>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '12px' }} />
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{product.name}</h2>
          <p style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: '700', marginBottom: '1rem' }}>
            ₹{product.price.toLocaleString()}
            {product.originalPrice && (
              <span style={{ textDecoration: 'line-through', color: 'var(--gray-text)', fontSize: '1.2rem', marginLeft: '1rem' }}>
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </p>
          {product.offer && (
            <span style={{ background: '#FF4444', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600' }}>
              {product.offer}
            </span>
          )}
          <p style={{ margin: '2rem 0', lineHeight: '1.8' }}>{product.description}</p>
          <button className="checkout-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;