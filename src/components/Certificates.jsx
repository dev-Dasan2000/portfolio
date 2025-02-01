import React, { useState, useEffect } from 'react';
import C1 from '../assets/C1.jpg'
import C2 from '../assets/C2.jpg'
import C3 from '../assets/C3.jpg'
import C4 from '../assets/C4.jpg'
import C5 from '../assets/C5.jpg'

const ImageTransition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('none');

  const images = [C1, C2, C3, C4, C5];

  const goToNext = () => {
    setDirection('up');
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setDirection('down');
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection('none');
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getCurrentSlideClass = () => {
    switch (direction) {
      case 'up':
        return 'current-up';
      case 'down':
        return 'current-down';
      default:
        return 'no-transition';
    }
  };

  const getNextSlideClass = () => {
    switch (direction) {
      case 'up':
        return 'next-up';
      case 'down':
        return 'next-down';
      default:
        return 'no-transition';
    }
  };

  return (
    <div className="image-slider">
      <div className={`slide ${getCurrentSlideClass()}`}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      <div className={`slide ${getNextSlideClass()}`}>
        <img
          src={images[(currentIndex + (direction === 'up' ? 1 : images.length - 1)) % images.length]}
          alt={`Slide ${currentIndex + 2}`}
        />
      </div>

      <div className="navigation">
        <button className="nav-button" onClick={goToPrevious}>↑</button>
        <button className="nav-button" onClick={goToNext}>↓</button>
      </div>
    </div>
  );
};

export default ImageTransition;