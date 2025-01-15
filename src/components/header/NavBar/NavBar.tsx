import React, { useEffect, useState, useRef } from "react";

const NavBar: React.FC = () => {
  const efectoRef = useRef<HTMLDivElement | null>(null);

const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
  const target = event.currentTarget;
  const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = target;

  if (efectoRef.current) {
    console.log(offsetLeft, offsetTop, offsetWidth, offsetHeight);
    efectoRef.current.style.setProperty("--left", `${offsetLeft}px`);
    efectoRef.current.style.setProperty("--top", `${offsetTop + offsetHeight}px`);
    efectoRef.current.style.setProperty("--width", `${offsetWidth}px`);
    efectoRef.current.style.opacity = "1";
    efectoRef.current.style.visibility = "visible";
  }
};

const handleScroll = (sectionId: string, scrollEnd: ScrollLogicalPosition = "start") => {
  
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({
    behavior: "smooth",
    block: scrollEnd,
  });
};

const handleMouseLeave = () => {
  if (efectoRef.current) {
    efectoRef.current.style.opacity = "0";
    efectoRef.current.style.visibility = "hidden";
  }
};

  return (
    <nav className="fixed h-[80px] top-0 left-0 right-0 z-50 w-full bg-black text-white font-semibold flex justify-around md:justify-evenly items-center px-4 py-4">
      {/* Logo */}
      <div className="w-36 sm:w-40 cursor-pointer">
        <a href="/">
          <img className="imagen" src="src/imagenes/everest.png" alt="Logo Everest" />
        </a>
      </div>
      
      {/* Enlaces de navegación */}
      <div className="hidden md:relative md:flex flex-row justify-around w-[40%] list-none">

        {/* Efecto de hover*/}
        <div
            id="menu-efecto"
            className="
            absolute 
            bg-amarillo 
            left-[var(--left)] 
            top-[var(--top)] 
            w-[var(--width)] 
            h-[3px]
            transition-all 
            backdrop-filter backdrop-negative
            duration-300 ease-out"
            ref={efectoRef}
          />
        
        
        <li
          className="cursor-pointer hidden md:block text-sm sm:text-lg lg:text-2xl transition-all duration-500 transform border-b-transparent border-b-[3px] p-1"
          onMouseEnter={handleMouseEnter} // Agregado el evento
          onMouseLeave={handleMouseLeave} // Agregado el evento
          onClick={() => handleScroll("section1","end")}
        >
          <a>Inicio</a>
        </li>

        <li
          className="cursor-pointer hidden md:block text-sm sm:text-lg lg:text-2xl transition-all duration-500 transform border-b-transparent border-b-[3px] p-1"
          onMouseEnter={handleMouseEnter} // Agregado el evento
          onMouseLeave={handleMouseLeave} // Agregado el evento
          onClick={() => handleScroll("section3")}
        >
          <a>Planes</a>
        </li>

        <li
          className="cursor-pointer hidden md:block text-sm sm:text-lg lg:text-2xl transition-all duration-500 transform border-b-transparent border-b-[3px] p-1"
          onMouseEnter={handleMouseEnter} // Agregado el evento
          onMouseLeave={handleMouseLeave} // Agregado el evento
          onClick={() => handleScroll("section5")}
        >
          <a>Contacto</a>
        </li>
      </div>

      {/* Botón */}
      <div className="flex items-center space-x-4 sm:space-x-8 w-[15%] min-w-[100px]">
        <button className="max-w-[180px] font-oswald font-black flex items-center justify-center leading-none no-underline text-black text-lg w-[100%] h-10 transition-[0.3s] hover:skew-x-[-13deg] skew-x-[-20deg] bg-[#fee705] rounded-[2px] border-[3px] border-transparent">
          Unirse
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

