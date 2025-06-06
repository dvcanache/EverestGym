import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
       // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <div
      className="w-full  flex items-center justify-center sm:p-12 lg:p-24"
      id="section5"
      style={{
        background:
          "linear-gradient(27deg, #080804 5px, transparent 5px) 0 5px, linear-gradient(207deg, #080804 5px, transparent 5px) 10px 0px, linear-gradient(27deg, #111 5px, transparent 5px) 0px 10px, linear-gradient(207deg, #111 5px, transparent 5px) 10px 5px, linear-gradient(90deg, #0d0d0d 10px, transparent 10px), linear-gradient(#0e0e0e 25%, #0a0a0a 25%, #0a0a0a 50%, transparent 50%, transparent 75%, #121212 75%, #121212)",
        backgroundColor: "#0a0a0a",
        backgroundSize: "20px 20px",
        borderTop: "",
      }}
    >
      <div className="flex flex-col text-xl md:flex-col lg:flex-row max-w-6xl sm:max-w-10xl md:w-full w-full text-white rounded-lg shadow-xl sm:shadow-lg">
        <form
          className="p-14 w-full bg-black opacity-80 lg:w-1/2 sm:pt-0"
          data-aos="fade-up"
        >
          <div className=" w-full h-20 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold pt-2 text-center md:text-left">
              Contáctanos
            </h2>
          </div>

          {/* Contenedor para Nombre y Apellido */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="w-full sm:w-1/2">
              <label htmlFor="name" className="block text-md mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="Nombre"
                required
                className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 text-white bg-black"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="surname" className="block text-md mb-2">
                Apellido
              </label>
              <input
                type="text"
                id="surname"
                placeholder="Apellido"
                required
                className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 text-white bg-black"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-md mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="Correo electrónico"
              required
              className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 text-white bg-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-md mb-2">
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Número de Teléfono"
              required
              className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 text-white bg-black"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center leading-none text-black text-xl font-bold rounded-none py-3 transition-transform duration-300 transform skew-x-[-20deg] bg-[#fee705] hover:scale-105 "
          >
            Enviar
          </button>
        </form>

        {/* Imagen a la derecha del formulario */}
        <div
          className="hidden lg:block w-full md:w-1/2 bg-gray-200 rounded-r-lg overflow-hidden"
          data-aos="fade-up"
        >
          <img
            src="https://i.imgur.com/g9ur7qI.jpeg" // Cambia esta ruta por la URL de tu imagen
            alt="Imagen de contacto"
            className="h-[555px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
