import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full h-full text-left font-montserrat flex flex-wrap p-6 sm:p-12 lg:p-24 absolute border-t-[13px] border-amarillo bg-transparent text-white">
            <div className="flex flex-wrap w-full justify-between">
                {/* Sección "Sobre nosotros" */}
                <div className="w-full sm:w-1/2 lg:w-1/3 pt-3 border-t border-amarillo mb-6 lg:mb-0">
                    <h3 className="text-lg font-bold">Sobre nosotros</h3>
                    <p className="text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ex nec nunc mollis tincidunt.
                    </p>
                    <p className="text-sm mt-4">© 2022 EverestGym. Todos los derechos reservados.</p>
                </div>

                {/* Logo */}
                <div className="w-36 sm:w-1/2 lg:w-auto text-left pt-0 border-t-0 pl-0 -ml-4 mb-6 sm:mb-0 lg:mb-0">
                    <img src="src/imagenes/everest-sinfondo.png" alt="Everest Gym Logo" />
                </div>

                {/* Sección "Contacto" */}
                <div className="w-full sm:w-1/2 lg:w-1/3 pt-3 border-t border-yellow-500">
                    <h3 className="text-lg font-bold">Contacto</h3>
                    <p className="text-sm mt-2">123 Main St, Anytown, USA</p>
                    <p className="text-sm mt-2">Phone: (123) 456-7890</p>
                    <p className="text-sm mt-2 break-words">Email: everestgym@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

