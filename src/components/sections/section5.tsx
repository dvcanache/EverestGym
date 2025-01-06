import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <div className="w-full h-[110vh] rounded-lg flex items-center justify-center p-4">
            <div className="flex max-w-6xl w-full text-white rounded-lg shadow-md bg-gradient-to-b from-[#0d0d0e] via-[#1d1d1d] to-[#252323e5]">
                <form className="p-10 w-full">
                    <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-normal mb-2 font-oswald">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full p-3 border border-gray-600 rounded-full focus:outline-none focus:ring focus:ring-amarillo"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="surname" className="block text-sm font-normal mb-2 font-oswald">Apellido</label>
                        <input
                            type="text"
                            id="surname"
                            required
                            className="w-full p-3 border border-gray-600 rounded-full focus:outline-none focus:ring focus:ring-amarillo"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-normal mb-2 font-oswald">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full p-3 border border-gray-600 rounded-full focus:outline-none focus:ring focus:ring-amarillo"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm  mb-2 font-oswald font-normal">Número de Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            className="w-full p-3 border border-gray-600 rounded-full focus:outline-none focus:ring focus:ring-amarillo"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-amarillo  text-black font-semibold py-3 rounded transition duration-200"
                    >
                        Enviar
                    </button>
                </form>

                {/* Imagen a la derecha del formulario */}
                <div className="hidden md:block w-[400px] bg-gray-200 rounded-r-lg overflow-hidden">
                    <img
                        src="./src/imagenes/fondo1.png" // Cambia esta ruta por la URL de tu imagen
                        alt="Descripción de la imagen"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

