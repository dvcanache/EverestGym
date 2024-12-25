import { FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <nav className="fixed z-50 w-full bg-black text-white font-semibold flex text-2xl justify-around items-center px-4 py-4">
        {/* Logo */}
        <div className="w-40 cursor-pointer">
          <a href="/">
            <img className="imagen" src="src\imagenes\everest.png" alt="" />
          </a>
        </div>

        {/* Enlaces de navegación */}
        <ul className="flex justify-between items-center space-x-24">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="#">Planes</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
        <div className="flex items-center space-x-8">
          <div className="text-4xl text-amarillo cursor-pointer">
            <FaWhatsapp />
          </div>
        {/* Botón destacado */}
          <button className="bg-amarillo text-black text-base font-bold text px-8 py-0.5 rounded">Unirse <br />Ahora</button>
        </div>

      </nav>
    </>
  );
};

export default NavBar;