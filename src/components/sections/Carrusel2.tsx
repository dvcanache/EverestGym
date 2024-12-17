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
    image: "https://via.placeholder.com/800x400",
    title: "¡50% de descuento en membresías anuales!",
    description: "Aprovecha esta oferta por tiempo limitado.",
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "Clases de spinning gratis los sábados",
    description: "Inscríbete y prueba nuestras clases gratuitas.",
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "Nuevo horario para yoga",
    description: "Disfruta de yoga a las 7 PM todos los días.",
  },
];

// Componente personalizado de flechas
const CustomArrow = ({ className, style, onClick, isNext }: any) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        transition: "transform 0.3 ease",
        marginLeft: "20x",
        marginRight: "40px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <span
        style={{
          color: "white",
          fontSize: "20px",
          position: "relative",
          top: "5px",
          left: isNext ? "12px" : "10px",
        }}
      >
        {isNext ? "›" : "‹"}
      </span>
    </div>
  );
};

const Carousel: React.FC = () => {
  // Configuración del carrusel
  const settings: React.ComponentProps<typeof Slider> = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow isNext={false} />, // Flecha izquierda
    nextArrow: <CustomArrow isNext={true} />, // Flecha derecha
  };

  // Manejar el clic del botón
  const handleScrollToSection = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {promotions.map((promo, index) => (
          <div key={index} className="slide">
            <img src={promo.image} alt={promo.title} />
            <h2>{promo.title}</h2>
            <p>{promo.description}</p>
          </div>
        ))}
      </Slider>
      <button
        className="scroll-button"
        style={{ background: "#e9e502dc" }}
        onClick={handleScrollToSection}
      >
        Inscribirse
      </button>
    </div>
  );
};

export default Carousel;
