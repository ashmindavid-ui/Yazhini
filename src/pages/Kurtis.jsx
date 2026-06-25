import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Kurtis = () => {
  const kurtis = products.filter(p => p.category === 'kurtis');

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2 className="section-title">Our <span>Kurti Collection</span></h2>
      <div className="products-grid">
        {kurtis.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Kurtis;