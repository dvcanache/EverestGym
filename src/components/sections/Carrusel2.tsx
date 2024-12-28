import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel2.css";

// Tipos para las imágenes del carrusel
interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  { src: "https://via.placeholder.com/800x400", alt: "Imagen 1" },
  { src: "https://via.placeholder.com/800x400", alt: "Imagen 2" },
  { src: "https://via.placeholder.com/800x400", alt: "Imagen 3" },
];

const SimpleCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleCarousel;