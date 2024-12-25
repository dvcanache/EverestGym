import React from 'react';

function Footer() {
    return (
        <footer className="footerr h-full w-full text-left font-montserrat flex p-24 absolute border-t-[13px] border-yellow-500 bg-transparent text-white">
            <div className="container flex justify-between w-full">
                <div className="col pt-5 border-t border-yellow-500">
                    <h3 className="text-xl font-bold mb-4">Sobre nosotros</h3>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ex nec nunc mollis tincidunt.</p>
                    <p>© 2022 EverestGym. Todos los derechos reservados.</p>
                </div>
                <div className="col everest-logo flex justify-center items-center pt-0 border-t-0">
                    <img src="src/imagenes/everest-sinfondo.png" alt="Everest Gym Logo" className="max-w-full h-auto" />
                </div>
                <div className="col pt-5 border-t border-yellow-500">
                    <h3 className="text-xl font-bold mb-4">Contacto</h3>
                    <p className="mb-2">123 Main St, Anytown, USA</p>
                    <p className="mb-2">Phone: (123) 456-7890</p>
                    <p>Email: everestgym@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;