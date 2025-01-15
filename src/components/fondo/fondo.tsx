import "./fondo.css";
import Footer from "../footer/footer";
import Section1 from "../header/HeroSection/section1";
import Section2 from "../mainSection/seccion2/section2";
import Section3 from "../mainSection/section3/section3";
import Section4 from "../mainSection/section4/section4";
import Section5 from "../mainSection/seccion5/section5";
function Fondo() {
  return (
    <div>
      <Section1></Section1>
      <div className="py-12 px-[40px] sm:px-[130px] md:text-left text-white font-bebas text-opacity-100 text-[60px] w-full h-auto bg-black">
        La{" "}
        <span className="text-amarillo font-bebas">diciplina{" "}</span>
        es el puente hacia tus{" "}
        <span className="text-amarillo font-bebas">logros.</span>
      </div>
      <div className="fondobox descripcion">
        <Section2></Section2>
      </div>
      {/* divisor barra de promociones*/}
      <div className="py-12 px-[40px] sm:px-[130px] md:text-left text-white font-bebas text-opacity-100 text-[66px] w-full h-auto bg-black">
        Encuentra tu plan ideal{" "}
        <span className="text-amarillo font-bebas">no mas excusas.</span>
      </div>
      <div className="fondobox promociones">
        {/* promociones y precios*/}
        <Section3></Section3>
      </div>
      <div className="fondobox entrenadores">
        <Section4></Section4>
      </div>
        <Section5></Section5>
      <div className="fondobox footer">
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Fondo;
