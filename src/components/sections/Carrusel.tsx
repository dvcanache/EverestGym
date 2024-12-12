import React, { useState } from 'react';
import background from './gianpiero.jpg';

type CarouselProps = {
  items: string[]; // Puedes ajustar el tipo según lo que desees mostrar (imágenes, texto, etc.)
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ width: '300px', overflow: 'hidden',marginLeft: '700px',marginTop: '-250px'}}>
      <div
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: '100%',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'black',
              backgroundImage: 'url($background)',
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;

