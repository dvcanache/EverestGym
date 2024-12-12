import React, { useState } from "react";
import "./carrusel.css";
import image from "../../imagenes/fondo11.jpg";

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
     image,
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
      </div>
      <button
        onClick={handlePrev}
        className="carousel-button left"
      >
        {"<"}
      </button>
      <button
        onClick={handleNext}
        className="carousel-button right"
      >
        {">"}
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={currentIndex === index ? "active" : ""}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
