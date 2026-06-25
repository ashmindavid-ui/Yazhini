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
      image: 'https://img.sanishtech.com/u/39dcca68d5ea61d36c97ed283959fb15.jpg'
    },
    { 
      id: 'lehengas', 
      title: 'Lehengas', 
      image: 'https://img.sanishtech.com/u/e54b85d35d05a7b66eb201057886754f.jpg'
    },
    { 
      id: 'kurtis', 
      title: 'Kurtis', 
      image: 'https://img.sanishtech.com/u/a3e47350b4c89a8ce6b669df894c3ef5.jpg'
    },
    { 
      id: 'chudithars', 
      title: 'Chudithars', 
      image: 'https://img.sanishtech.com/u/b521a8cbab604199f8c8a1df560fcea1.jpg'
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