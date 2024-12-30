import Carrusel from "./Carrusel";
import './Carrusel.css'
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import { FaRunning } from "react-icons/fa";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';;
import { FaBaseballBatBall } from "react-icons/fa6";


function Section2() {


  return (
    <div className='w-[85%] h-[80%] p-[50px] absolute bg-transparent text-white text-[40px] rounded-[25px] '>
      <h2 className="w-[60%] h-[90px] font-extrabold">Supera tus limites con Everest Gym</h2>
      <p className="text-[20px] w-[400px] mt-[10px]">
        ¡Hoy es el día para superar tus límites! Recuerda que cada gota de sudor es un paso más hacia tus objetivos.
      </p>

      <ul className="h-[100px] w-[400px] flex-col">
        <h3 className="subtitulo">Tipos de Entrenamientos</h3>
        <div className="">
          <li className="flex flex-row border-[10px] border-amarillo rounded-[5px] p-[15px]">
            <div className="h-[40px] w-[40px]"><FitnessCenterIcon /></div>Sala de Pesas
            </li>
          <li className="flex flex-row border-[10px] border-amarillo rounded-[5px] p-[15px]">
            <div className="h-[40px] w-[40px]"><FaRunning /></div>
             Area de Crossfit
            </li>
          <li className="flex flex-row border-[10px] border-amarillo rounded-[5px] p-[15px]">
            <div className="h-[40px] w-[40px]"><SportsMmaIcon /></div>
             Area de MMA
            </li>
          <li className="flex flex-row border-[10px] border-amarillo rounded-[5px] p-[15px]">
            <div className="h-[40px] w-[40px]"><FaBaseballBatBall /></div>
            Area de Beisbol
            </li>
        </div>
      </ul>
      <div>

        <div className="zonas">
          Zonas
        </div>
        <Carrusel />
      </div>
    </div>


  );
}
export default Section2