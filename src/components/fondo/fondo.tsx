
import './fondo.css'
import Footer from '../footer/footer'
import Section1 from '../header/HeroSection/section1'
import Section2 from '../mainSection/seccion2/section2'
import Section3 from '../sections/section3'
import Section4 from '../sections/section4'
import Section5 from '../sections/section5'
function Fondo() {

    return (
        <div>
            
            <div className="fondobox">
                <div className='gradient'></div>
                <div className='gradient2'></div>
                <Section1></Section1>
                <img className="fondoimg" src="src\imagenes\fondo1.png" alt="" />
            </div>
            <div className="fondobox descripcion">
                <Section2></Section2>
                
            </div>
            <div className="fondobox promociones">
                <Section3></Section3>
            </div>
            <div className="fondobox">
                <Section4></Section4>
                <img className="fondoimg cinco" src="src\imagenes\fondo6.png" alt="" />
            </div>
            <div className="fondobox formulario">
                <Section5></Section5>    
            </div>
            <div className="fondobox footer">
                <Footer></Footer>
            </div>
             
        </div>
    )
}
export default Fondo