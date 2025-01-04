import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const pricingPlans = [
  {
    title: "Plan Básico",
    description: "Acceso limitado a todas las instalaciones.",
    price: "$19.99/mes",
  },
  {
    title: "Plan Premium",
    description: "Acceso ilimitado con clases especiales.",
    price: "$39.99/mes",
  },
  {
    title: "Plan VIP",
    description: "Acceso completo con entrenador personal.",
    price: "$59.99/mes",
  },
  {
    title: "Plan Corporativo",
    description: "Descuentos para grupos empresariales.",
    price: "$29.99/mes por miembro",
  },
];

const PricingSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Muestra 3 slides al mismo tiempo
    slidesToScroll: 1, // Desplaza de uno en uno
    responsive: [
      {
        breakpoint: 1024, // En pantallas medianas
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // En pantallas pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pricing-section bg-gray-900 py-10 px-4 w-full">
      <h2 className="text-center text-3xl text-white mb-8 font-bold">
        Elige tu Plan
      </h2>
      <Slider {...settings}>
        {pricingPlans.map((plan, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-xl font-bold text-green-600">{plan.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PricingSlider;
