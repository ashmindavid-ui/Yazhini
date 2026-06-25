import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Chudithars = () => {
  const chudithars = products.filter(p => p.category === 'chudithars');

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2 className="section-title">Our <span>Chudithar Collection</span></h2>
      <div className="products-grid">
        {chudithars.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Chudithars;