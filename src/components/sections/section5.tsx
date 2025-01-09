import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de la animación en milisegundos
        });
    }, []);

    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-transparent">
            <div className="flex flex-col sm:flex-col md:flex-row max-w-6xl sm:max-w-10xl md:max-w-12xl w-full text-white rounded-lg shadow-xl sm:shadow-lg bg-gradient-to-b from-[#0e0d0d] via-[#0f0f0f] to-[#252323e5]">
                <form className="sm:p-20 p-6 w-full md:w-2/3 sm:pt-0" data-aos="fade-up">
                    <div className=' w-full h-28 flex flex-col items-center justify-center'>
                        <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left">Contáctanos</h2>
                    </div>

                    {/* Contenedor para Nombre y Apellido */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="name" className="block text-sm font-semibold mb-2">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Nombre"
                                required
                                className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 text-white"
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="surname" className="block text-sm font-semibold mb-2">Apellido</label>
                            <input
                                type="text"
                                id="surname"
                                placeholder="Apellido"
                                required
                                className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 text-white"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Correo electrónico"
                            required
                            className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 text-white"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">Número de Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Número de Teléfono"
                            required
                            className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 text-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center leading-none text-black text-lg font-bold rounded-none h-12 border-3 border-[#090909] transition-transform duration-300 transform skew-x-[-20deg] bg-[#fee705] hover:scale-105 "
                    >
                        Enviar
                    </button>
                </form>

                {/* Imagen a la derecha del formulario */}
                <div className="hidden md:block w-full md:w-1/3 bg-gray-200 rounded-r-lg overflow-hidden" data-aos="fade-left">
                    <img
                        src="./src/imagenes/Everest.jpg" // Cambia esta ruta por la URL de tu imagen
                        alt="Imagen de contacto"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;






