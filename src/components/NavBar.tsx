import './NavBar.css'

const NavBar = () => {

    return ( <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: 'black',
        color: 'white',
      }}>
        {/* Logo */}
        <div className='logocont'><img className='imagen' src="src\imagenes\everest.png" alt="" /></div>
  
        {/* Enlaces de navegación */}
        <ul>
            
          <li>
            <a href='http://youtube.com'>Inicio</a>
          </li>
          <li>
            <a>Planes</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
  
        {/* Botón destacado */}
        <button>
          Unirse ahora
        </button>
      </nav>);
};

export default NavBar;