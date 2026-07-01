import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sliderData } from '../data/products';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const navigate = useNavigate();

  const getWebpPath = (jpgPath) => jpgPath.replace('.jpg', '.webp');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  }, []);

  const handleSlideClick = (category) => {
    navigate(`/${category}`);
  };

  const handleImageLoad = (slideId) => {
    setLoadedImages((prev) => new Set(prev).add(slideId));
  };

  return (
    <div className="hero-slider">
      {sliderData.map((slide, index) => {
        const isActive = index === currentSlide;
        const isLoaded = loadedImages.has(slide.id);
        return (
          <div
            key={slide.id}
            className={`slide ${isActive ? 'active' : ''} ${isLoaded ? 'loaded' : ''}`}
            onClick={() => handleSlideClick(slide.category)}
          >
            <picture>
              <source srcSet={getWebpPath(slide.image)} type="image/webp" />
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchpriority={index === 0 ? 'high' : 'low'}
                onLoad={() => handleImageLoad(slide.id)}
              />
            </picture>
            <div className="slide-overlay" />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        );
      })}
      
      <button className="slider-btn prev" onClick={(e) => { e.stopPropagation(); prevSlide(); }} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className="slider-btn next" onClick={(e) => { e.stopPropagation(); nextSlide(); }} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>
      
      <div className="slider-dots">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;