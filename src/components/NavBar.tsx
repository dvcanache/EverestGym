import './NavBar.css'

const NavBar = () => {

    return ( <nav className='navstyle'>
        {/* Logo */}
        <div className='logocont'><img className='imagen' src="src\imagenes\everest.png" alt="" /></div>
  
        {/* Enlaces de navegación */}
        <ul>
            
          <li>
            <a href='http://youtube.com'>Inicio</a>
          </li>
          <li>
            <a href='https://www.instagram.com/everest__training/?hl=es'>Planes</a>
          </li>
          <li>
            <a href='https://www.instagram.com/everest__training/?hl=es'>Contacto</a>
          </li>
        </ul>
  
        {/* Botón destacado */}
        <button>
          Unirse ahora
        </button>
      </nav>);
};

export default NavBar;