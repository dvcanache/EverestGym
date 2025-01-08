import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CheckIcon } from "@heroicons/react/24/solid";

const pricingPlans = [
  {
    title: "Plan Básico",
    description: "Acceso limitado a todas las instalaciones.",
    price: "$19.99/Mes",
    features: ["Acceso completo al gimnasio", "Entrenador personal", "Clases exclusivas"],
  },
  {
    title: "Plan Premium",
    description: "Acceso ilimitado con clases especiales.",
    price: "$39.99/Mes",
    features: ["Acceso completo al gimnasio", "Entrenador personal", "Clases exclusivas"],

  },
  {
    title: "Plan VIP",
    description: "Acceso completo con entrenador personal.",
    price: "$59.99/Mes",
    features: ["Acceso completo al gimnasio", "Entrenador personal", "Clases exclusivas"],
  },
  {
    title: "Plan Corporativo",
    description: "Descuentos para grupos empresariales.",
    price: "$29.99/Mes",
    features: ["Acceso completo al gimnasio", "Entrenador personal", "Clases exclusivas"],
  },
];

const PricingSlider = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3, // Muestra 3 slides al mismo tiempo
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 1000, 
    responsive: [
      {
        breakpoint: 992, // En pantallas medianas
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
    <div className=" pricing-section border-[0px] border-amarillo rounded-[40px] py-10 px-0 w-[100%]">
      {/* <h2 className="font-bebas tracking-wider text-center text-[34px] text-white mb-8 font-bold">
        Elige tu Plan
      </h2> */}
      <Slider {...settings}>
        {pricingPlans.map((plan, index) => (
          <div key={index} className="px-4">
            {/* tarjeta */}
            <div
              className={`hover:border-yellow-200 
                hover:translate-y-[-10px] 
                transition 
                duration-300 
                ease-in-out 
                py-[20px] 
                xl:py-[30px] 
                h-96
                mb-[15px] 
                mt-[10px] 
                flex
                flex-col 
                xl:h-[500px] 
                w-full 
                justify-between 
                font-oswald 
                shadow-[0_4px_15px_rgba(255,255,255,0.5)] 
                shadow-black 
                p-6 
                rounded-[20px] 
                text-center ${index === 0
                ? "bg-gradient-to-l from-[#000000] from-10% via-[#0a0a0a] via-30% to-[#000000] to-90% border-[1px]"
                : index === pricingPlans.length - 1
                  ? "bg-gradient-to-l from-[#000000] from-10% via-[#0a0a0a] via-30% to-[#000000] to-90% border-[1px]"
                  : "bg-gradient-to-l from-[#000000] from-10% via-[#0a0a0a] via-30% to-[#000000] to-90% border-[1px]"
                }`}
            >
              {/* parte superior de la tarjeta */}
              <div className="flex h-[20%] text-white border-b-[1px]">
                <h3 className="
                xl:h-[40px] 
                lg:h-[36px] 
                md:h-[32px] 
                h-[32px] 
                 xl:text-[20px] 
                 lg:text-[18px] 
                 md:text-[16px] 
                 text-[16px] 
                 text-left 
                 font-normal
                  px-[10px] 
                  py-[5px]
                   text-white 
                   border-[2px]
                    rounded-full 
                    border-white">
                  {plan.title}
                </h3>
              </div>
              {/* parte central de la tarjeta */}
              <div className="flex flex-col justify-center h-auto">
                <p className="font-semibold font-montserrat text-left text-[16px] md:text-[14px] xl:text-[18px] text-white">
                  {plan.description}
                </p>
                {/* Lista de características */}
                <ul className="mt-2 space-y-2 text-left">
                  {plan.features?.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 font-montserrat text-white text-[14px] md:text-[14px] xl:text-[16px]">
                      {/* Icono */}
                      <CheckIcon className="h-5 w-5 text-amarillo flex-shrink-0" />
                      {/* Texto */}
                      <p className="font-montserrat">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* parte inferior de la tarjeta */}
              <div className="pt-[10px] flex flex-row justify-between items-end h-[20%] text-white border-t-[1px] border-grey-500">
                {/* precio */}
                <p className="font-monserrat  text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] h-auto bt-[20px] text-left font-normal w-[50%]">
                  {plan.price}
                </p>
                {/* botón */}
                <button className="text-[11px] sm:text-[12px] md:text-[14px] xl:text-[16px] font-montserrat p-[1px] border-[2px] bg-amarillo border-amarillo text-center text-black text-base font-bold text rounded-full w-[40%]">
                  Empezar
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PricingSlider;
