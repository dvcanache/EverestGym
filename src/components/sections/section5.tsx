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
        <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-[#1d1d1d] via-[#282828] to-[#353535]">
            <div className="flex flex-col sm:flex-col md:flex-row max-w-6xl sm:max-w-10xl md:max-w-12xl w-full text-white rounded-lg shadow-xl sm:shadow-lg bg-gradient-to-b from-[#0e0d0d] via-[#0f0f0f] to-[#252323e5]">
                <form className="sm:p-20 p-6 w-full md:w-1/2" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">Contáctanos</h2>

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
                        className="w-full flex items-center justify-center p-3 text-lg font-bold text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500"
                    >
                        Enviar
                    </button>
                </form>

                {/* Imagen a la derecha del formulario */}
                <div className="hidden md:block w-full md:w-1/2 bg-gray-200 rounded-r-lg overflow-hidden" data-aos="fade-left">
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






