import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Sarees = () => {
  const sarees = products.filter(p => p.category === 'sarees');

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2 className="section-title">Our <span>Saree Collection</span></h2>
      <div className="products-grid">
        {sarees.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sarees;