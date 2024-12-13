import React, { useState, useEffect } from "react";
import "./carrusel.css";
import myImage from "../../imagenes/gym.jpg";
import myImage2 from "../../imagenes/fondo11.jpg";
import myImage3 from "../../imagenes/ring.png";
import myImage4 from "../../imagenes/gym2.jpg";

const ImageCarousel: React.FC = () => {
  const images = [
    myImage,myImage2,myImage3,myImage4
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Comienza en el primer índice real
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Agregar imágenes duplicadas al principio y al final
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Cambio automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  // Manejo del bucle infinito sin retrocesos visibles
  useEffect(() => {
    if (currentIndex === 0) {
      // Mover instantáneamente al último índice real
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 0);
    } else if (currentIndex === images.length + 1) {
      // Mover instantáneamente al primer índice real
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 0);
    } else {
      setIsTransitioning(true); // Habilita la transición normalmente
    }
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {extendedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
      </div>
  );
};

export default ImageCarousel;

