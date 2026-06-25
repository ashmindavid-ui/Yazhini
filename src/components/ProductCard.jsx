import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onClick={() => navigate(`/product/${product.id}`)}
        />
        {product.offer && (
          <span className="offer-tag">{product.offer}</span>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="price">
          ₹{product.price.toLocaleString()}
          {product.originalPrice && (
            <span className="original-price">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;