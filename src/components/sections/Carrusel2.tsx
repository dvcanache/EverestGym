import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componente de flechas personalizadas
const CustomArrow = ({ className, onClick }: any) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "block",
        background: "gray",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
      }}
    />
  );
};

const CarruselConTexto = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow />, // Flecha izquierda personalizada
    nextArrow: <CustomArrow />, // Flecha derecha personalizada
  };

  return (
    <div className="container">
      {/* Carrusel */}
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Promoción+1"
              alt="Promoción 1"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Promoción+2"
              alt="Promoción 2"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Promoción+3"
              alt="Promoción 3"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarruselConTexto;
