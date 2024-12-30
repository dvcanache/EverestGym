import { FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <nav className="fixed h-[80px] top-0 left-0 right-0 z-50 w-full bg-black text-white font-semibold flex text-2xl justify-around items-center px-4 py-4 ">
        {/* Logo */}
        <div className="w-40 cursor-pointer ">
          <a href="/">
            <img className="imagen" src="src\imagenes\everest.png" alt="" />
          </a>
        </div>

        {/* Enlaces de navegación */}
        <ul className="flex justify-between items-center space-x-24 ">
          <li className="hover:text-custom-hover hover:transition-all hover:duration-500 hover:ease-in-out hover:transform hover:scale-110 hover:opacity-100 hover:text-[#e9e502]">
            <a href="/">Inicio</a>
          </li>
          <li className="hover:text-custom-hover hover:transition-all hover:duration-500 hover:ease-in-out hover:transform hover:scale-110 hover:opacity-100 hover:text-[#e9e502]">
            <a href="#">Planes</a>
          </li>
          <li className= "hover:text-custom-hover hover:transition-all hover:duration-500 hover:ease-in-out hover:transform hover:scale-110 hover:opacity-100 hover:text-[#e9e502]">
            <a href="#">Contacto</a>
          </li>
        </ul>
        <div className="flex items-center space-x-8 ">
          <div className="text-4xl text-amarillo cursor-pointer ">
            <FaWhatsapp />
          </div>
        {/* Botón destacado */}
          <button className="bg-amarillo text-black text-base font-bold text px-10 py-0.5 rounded hover:text-custom-hover hover:transition-all hover:duration-500 hover:ease-in-out hover:transform hover:scale-110 hover:opacity-100 hover:text-[#e9e502] ">Unirse <br />Ahora</button>
        </div>

      </nav>
    </>
  );
};

export default NavBar;
