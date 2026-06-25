import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category, image, title, count }) => {
  const navigate = useNavigate();

  return (
    <div className="category-card" onClick={() => navigate(`/${category}`)}>
      <img src={image} alt={title} />
      <div className="category-info">
        <h3>{title}</h3>
        <p>{count} Items</p>
      </div>
    </div>
  );
};

export default CategoryCard;