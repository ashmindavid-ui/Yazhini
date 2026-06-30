import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const categories = [
    { 
      id: 'sarees', 
      title: 'Sarees', 
      image: '/images/category_sarees.jpg'
    },
    { 
      id: 'lehengas', 
      title: 'Lehengas', 
      image: '/images/category_lehengas.jpg'
    },
    { 
      id: 'kurtis', 
      title: 'Kurtis', 
      image: '/images/category_kurtis.jpg'
    },
    { 
      id: 'chudithars', 
      title: 'Chudithars', 
      image: '/images/category_chudithars.jpg'
    },
  ];

  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <HeroSlider />
      
      <section className="categories">
        <div className="container">
          <h2 className="section-title">
            Shop by <span>Category</span>
          </h2>
          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category.id}
                image={category.image}
                title={category.title}
                count={products.filter(p => p.category === category.id).length}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2 className="section-title">
            Featured <span>Products</span>
          </h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;