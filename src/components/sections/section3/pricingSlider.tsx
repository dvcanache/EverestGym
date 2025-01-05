import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const pricingPlans = [
  {
    title: "Plan Básico",
    description: "Acceso limitado a todas las instalaciones.",
    price: "$19.99/Mes",
  },
  {
    title: "Plan Premium",
    description: "Acceso ilimitado con clases especiales.",
    price: "$39.99/Mes",
  },
  {
    title: "Plan VIP",
    description: "Acceso completo con entrenador personal.",
    price: "$59.99/Mes",
  },
  {
    title: "Plan Corporativo",
    description: "Descuentos para grupos empresariales.",
    price: "$29.99/Mes",
  },
];

const PricingSlider = () => {
  const settings = {
    dots: false,
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
    <div className="bg-gradient-to-ab from-[#000000] via-[#3a3a3a] to-[#000000] pricing-section border-[0px] border-amarillo rounded-[40px] py-10 px-4 w-full">
      <h2 className="font-bebas tracking-wider text-center text-[34px] text-white mb-8 font-bold">
        Elige tu Plan
      </h2>
      <Slider {...settings}>
        {pricingPlans.map((plan, index) => (
          <div key={index} className="px-4">
            <div
              className={`hover:translate-y-[-10px] transition duration-300 ease-in-out py-[20px] lg:py-[30px] h-[250px] mb-[15px] mt-[10px] flex flex-col lg:h-[500px] w-full justify-between font-oswald shadow-[0_4px_15px_rgba(255,255,255,0.5)] shadow-black p-6 rounded-[20px] text-center ${index === 0
                ? "bg-yellow-500 "
                : index === pricingPlans.length - 1
                  ? "bg-black border-[1px] border-amarillo rounded-[20px]"
                  : "bg-gray-500 "
                }`}
            > 
              {/* parte superior de la tarjeta   */}
              <div className="flex h-[20%] text-white border-b-[1px]">
                <h3 className="h-[40px] text-[20px] text-left font-normal px-[10px] py-[5px] text-white border-[2px] rounded-full border-grey-500" >{plan.title}</h3>
              </div>
              {/* parte central de la tarjeta   */}
              <div className="flex flex-col justify-center h-[60%]">
                <p className="font-roboto text-left text-[30px] text-white font-">{plan.description}</p>
              </div>
              {/* parte inferior de la tarjeta   */}
              <div className="pt-[10px] flex flex-row justify-between items-end h-[20%] text-white border-t-[1px] border-grey-500">
                {/* precio   */}
                <p className="font-roboto text-[20px] h-auto bt-[20px] text-left font-extrabold w-[50%]">{plan.price}</p>
                {/* boton   */}
                <button className="p-[1px] border-[2px] bg-amarillo border-amarillo text-center text-black text-base font-bold text rounded w-[40%]">Empezar</button>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PricingSlider;
