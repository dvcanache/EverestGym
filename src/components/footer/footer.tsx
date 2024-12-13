import './footerstyle.css'

function Footer() {

    return(
            
                <footer className='footerr'>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3>Sobre nosotros</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ex nec nunc mollis tincidunt.</p>
                                <p>© 2022 EverestGym. Todos los derechos reservados.</p>
                            </div>
                            <div className="col everest-logo">
                                
                                <img src="src\imagenes\everest-sinfondo.png" alt="" />
                            </div>
                            <div className="col">
                                <h3>Contacto</h3>
                                <p>123 Main St, Anytown, USA</p>
                                <p>Phone: (123) 456-7890</p>
                                <p>Email: everestgym@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </footer>
            
            
        
    )
}

export default Footer