import Carrusel from "./Carrusel";
import './Carrusel.css'
import { PiBoxingGloveFill } from "react-icons/pi";
import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaBaseballBatBall } from "react-icons/fa6";
import './icons.css';

function Section2() {


  return (
    <div className="relative flex flex-col lg:flex-row border-none xl:border-purple-600 lg:border-green-400 md:border-red-600 sm:border-amarillo w-[90%] lg:w-[85%] h-auto lg:h-[80%] p-[40px] lg:p-[50px] bg-transparent text-white text-[20px] lg:text-[40px] rounded-[25px]">

      {/* Primera columna */}
      <div className="flex flex-col justify-between w-full lg:w-[50%] h-auto lg:pr-[50px] mb-[50px] lg:mb-0">
        <div>
          <h2 className="tracking-normal font-oswald h-auto lg:h-[90px] font-extrabold text-4xl lg:text-5xl text-left">
            Supera tus límites con <span className="text-amarillo">Everest Gym</span>
          </h2>
          <p className="font-oswald font-light h-auto text-base md:text-lg lg:text-2xl w-full lg:w-full mt-[10px] text-left">
          ¡Hoy es el día para superar tus límites! Recuerda que cada gota de sudor es un paso más hacia tus objetivos, cada esfuerzo cuenta, y cada desafío es una oportunidad para crecer. No importa lo difícil que sea el camino
          </p>

        </div>
        

        {/* Lista de entrenamientos */}
        <div className="flex flex-col items-center mt-[10px]">
          <h3 className="font-oswald h-auto text-xl lg:text-2xl mb-[20px] mt-[20px] lg:mt-[40px] font-extrabold text-center">
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
                className="text-base md:text-lg lg:text-2xl font-oswald shadow-[0_4px_15px_rgba(255,255,255,0.5)] shadow-black bg-gradient-to-t from-[#000000] to-[#111111] hover:scale-105 transition-transform hover:bg-opacity-75 bg-[#121212] w-full font-light mt-[13px] flex flex-row items-center border-[1px] border-amarillo rounded-[15px] p-[10px] lg:p-[15px]"
              >
                <div className="flex items-center justify-center ml-[10px] h-[30px] lg:h-[40px] w-[30px] lg:w-[40px]">
                  {item.icon}
                </div>
                <p className="w-full text-center">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Segunda columna */}
      <div className="justify-between flex flex-col items-center w-full lg:w-[50%] h-auto mt-[20px] lg:mt-0  lg:pl-[50px]">

        
        <div className="w-full rounded-[15px] overflow-hidden shadow-[0_4px_15px_rgba(2,2,2,0.5)] border-none border-[#3b3b3b]">
          <video className="w-full" src="https://i.imgur.com/rZN9mMy.mp4"playsInline={true} loop={true} autoPlay={true} muted={true}></video>
        </div>
        <div className="font-oswald h-auto w-[80%] lg:w-[260px] m-[10px] text-center font-bold text-[20px] lg:text-[28px]">
          ZONAS
        </div>
        <Carrusel />
      </div>
    </div>




  );
}
export default Section2