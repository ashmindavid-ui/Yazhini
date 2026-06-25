import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sliderData } from '../data/products';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const handleSlideClick = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div className="hero-slider">
      {sliderData.map((slide, index) => (
        <div
          key={slide.id}
          className="slide"
          style={{
            display: index === currentSlide ? 'block' : 'none',
          }}
          onClick={() => handleSlideClick(slide.category)}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}
      
      <button className="slider-btn prev" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>
        <ChevronLeft size={24} />
      </button>
      <button className="slider-btn next" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>
        <ChevronRight size={24} />
      </button>
      
      <div className="slider-dots">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;