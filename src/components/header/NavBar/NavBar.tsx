import React, {useEffect, useState} from "react";

const NavBar = () => {
  // const [isoScolled, setIsScrolled] = useState(false);


  // const handleScroll = () => {
  //   if (window.scrollY > 100) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <nav className="fixed h-[80px] top-0 left-0 right-0 z-50 w-full bg-black text-white font-semibold flex justify-evenly items-center px-4 py-4">
      {/* Logo */}
      <div className="w-36 sm:w-40 cursor-pointer">
        <a href="/">
          <img className="imagen" src="src/imagenes/everest.png" alt="Logo Everest" />
        </a>
      </div>

      {/* Enlaces de navegación */}
      <div className="flex flex-row justify-around w-[40%] list-none">
        <li className="hidden md:block text-sm sm:text-lg transition-all duration-500 transform border-b-transparent border-b-[1px] p-1   hover:border-amarillo">
          <a href="/">Inicio</a>
        </li>
        <li className="hidden md:block text-sm sm:text-lg transition-all duration-500 transform border-b-transparent border-b-[1px] p-1   hover:border-amarillo">
          <a href="#">Planes</a>
        </li>
        <li className="hidden md:block text-sm sm:text-lg transition-all duration-500 transform border-b-transparent border-b-[1px] p-1   hover:border-amarillo">
          <a href="#">Contacto</a>
        </li>
      </div>

      {/* WhatsApp y botón */}
      <div className="flex items-center space-x-4 sm:space-x-8">
        <button className="text-base sm:text-base bg-amarillo text-black font-bold px-4 sm:px-10 h-auto py-2 rounded hover:scale-110 transition-all duration-500">
          Unirse <br />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
