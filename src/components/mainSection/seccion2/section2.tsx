import Carrusel from "./Carrusel";
import './Carrusel.css'
import { PiBoxingGloveFill } from "react-icons/pi";
import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaBaseballBatBall } from "react-icons/fa6";
import './icons.css';

function Section2() {


  return (
    <div className="flex flex-col md:flex-row border-[10px] border-none rounded-[15px] w-[90%] md:w-[85%] h-auto md:h-[80%] p-[40px] md:p-[50px] absolute bg-transparent text-white text-[20px] md:text-[40px] rounded-[25px]">

      {/* Primera columna */}
      <div className="w-full md:w-[50%] h-auto pr-[50px]">
        <h2 className="tracking-normal font-oswald h-auto md:h-[90px] font-extrabold text-[28px] md:text-[48px] text-left">
          Supera tus límites con Everest Gym
        </h2>
        <p className="h-auto text-[16px] md:text-[20px] w-full md:w-full mt-[10px] text-left">
        ¡Hoy es el día para superar tus límites! Recuerda que cada gota de sudor es un paso más hacia tus objetivos, cada esfuerzo cuenta, y cada desafío es una oportunidad para crecer. No importa lo difícil que sea el camino
        </p>

        {/* Lista de entrenamientos */}
        <div className="flex flex-col items-center mt-[10px]">
          <h3 className="font-oswald h-auto text-[20px] md:text-[26px] mb-[20px] mt-[20px] md:mt-[40px] font-extrabold text-center">
            Tipos de Entrenamientos
          </h3>
          <ul className="flex flex-col items-center w-full">
            {[
              { icon: <GiWeightLiftingUp />, text: "Sala de Pesas" },
              { icon: <FaRunning />, text: "Área de Crossfit" },
              { icon: <PiBoxingGloveFill />, text: "Área de MMA" },
              { icon: <FaBaseballBatBall />, text: "Área de Béisbol" },
            ].map((item, index) => (
              <li
                key={index}
                className="font-oswald shadow-[0_4px_15px_rgba(255,255,255,0.5)] shadow-black bg-gradient-to-t from-[#0e0e0e] to-[#1b1b1b] hover:scale-105 transition-transform hover:bg-opacity-75 bg-[#121212] w-full text-[18px] font-normal md:text-[24px] mb-[13px] flex flex-row items-center border-[1px] border-amarillo rounded-full p-[10px] md:p-[15px]"
              >
                <div className="flex items-center justify-center ml-[10px] h-[30px] md:h-[40px] w-[30px] md:w-[40px]">
                  {item.icon}
                </div>
                <p className="w-full text-center">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Segunda columna */}
      <div className="flex flex-col items-center w-full md:w-[50%] h-auto mt-[20px] md:mt-0  md:pl-[50px]">

        <Carrusel />
        <div className="font-oswald h-auto w-[80%] md:w-[260px] m-[10px] text-center font-bold text-[20px] md:text-[28px]">
          ZONAS
        </div>
        <div className="w-full rounded-[15px] overflow-hidden shadow-[0_4px_15px_rgba(2,2,2,0.5)] border-[5px] border-[#3b3b3b]">
          <video className="w-full" src="src\videos\videoEverest.mp4"playsInline={true} loop={true} autoPlay={true} muted={true}></video>
        </div>
      </div>
    </div>



  );
}
export default Section2