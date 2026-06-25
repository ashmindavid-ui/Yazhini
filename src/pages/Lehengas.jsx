import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Lehengas = () => {
  const lehengas = products.filter(p => p.category === 'lehengas');

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2 className="section-title">Our <span>Lehenga Collection</span></h2>
      <div className="products-grid">
        {lehengas.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Lehengas;