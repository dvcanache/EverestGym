import Carrusel from './Carrusel'
import './section.css'
import { TbKarate } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaBaseballBatBall } from "react-icons/fa6";


function Section2() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];


    return (
        <div className='section2'>
            <h2>Supera tus limites con Everest Gym</h2>
      <p>
      ¡Hoy es el día para superar tus límites! Recuerda que cada gota de sudor es un paso más hacia tus objetivos. La clave está en la persistencia y la disciplina. No importa cuán difícil parezca, cada entrenamiento cuenta.
      </p>
      
      <h3>Tipos de Entrenamientos Disponibles:</h3>
      <ul>
        <li><FaDumbbell/>Sala de Pesas</li>
        <li><FaRunning/> Area de Crossfit</li>
        <li><TbKarate/> Area de MMA</li>
        <li><FaBaseballBatBall/>Area de Beisbol</li>
        <Carrusel items={items} />
      </ul>

      <div>
      </div>
        </div>


    );
}
export default Section2