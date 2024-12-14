import React from "react";
import Slider from "react-slick";
import "./Carrusel2.css";

// Tipos para las promociones
interface Promotion {
  image: string;
  title: string;
  description: string;
}

// Lista de promociones
const promotions: Promotion[] = [
  {
    image: "https://via.placeholder.com/1200x600",
    title: "¡50% de descuento en membresías anuales!",
    description: "Aprovecha esta oferta por tiempo limitado.",
  },
  {
    image: "https://via.placeholder.com/1200x600",
    title: "Clases de spinning gratis los sábados",
    description: "Inscríbete y prueba nuestras clases gratuitas.",
  },
  {
    image: "https://via.placeholder.com/1200x600",
    title: "Nuevo horario para yoga",
    description: "Disfruta de yoga a las 7 PM todos los días.",
  },
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Una imagen visible por vez
    slidesToScroll: 1, // Desplaza una por vez
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Mostrar flechas
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {promotions.map((promo, index) => (
          <div key={index} className="slide">
            <img src={promo.image} alt={promo.title} />
            <div className="slide-content">
              <h2>{promo.title}</h2>
              <p>{promo.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
