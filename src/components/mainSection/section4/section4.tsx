// Asegúrate de que AnimatedElement esté correctamente importado
import AnimatedElement from "./animater"; // O la ruta correcta

const cardData = [
  {
    image: "https://i.imgur.com/gZW42nY.jpeg",
    name: "Gero Arias",
    description: "Hola, soy Gero Arias, un entrenador personal certificado con más de 10 años de experiencia ayudando a personas a alcanzar sus metas de acondicionamiento físico.",
    animationBase: "fade-right", // Usaremos esto para construir la clase de animación
  },
  {
    image: "https://i.imgur.com/qzMzGUS.jpeg",
    name: "Ana López", // Nombre de ejemplo
    description: "¡Bienvenido/a! Si estás buscando un cambio en tu vida, has llegado al lugar correcto. Como tu entrenadora personal, mi misión es inspirarte y motivarte a alcanzar tus objetivos de fitness.",
    animationBase: "fade-left",
  },
  {
    image: "https://i.imgur.com/44X9Xpg.jpeg",
    name: "Carlos Ruiz", // Nombre de ejemplo
    description: "En Fitness Pro Studio, ofrecemos un enfoque integral para el entrenamiento personal. Nuestros servicios incluyen evaluaciones físicas iniciales y planes de entrenamiento personalizados.",
    animationBase: "fade-right",
  },
];

function ModernTrainerCards() {
  // Definición de color (si 'amarillo' no está en tu config de Tailwind)
  // const borderColor = 'border-yellow-400';
  // const textColorAmarillo = 'text-yellow-400';
  // Si 'amarillo' SÍ está definido en tailwind.config.js, usa:
  const borderColor = 'border-amarillo';
  const textColorAmarillo = 'text-amarillo';

  return (
    <div className="bg-transparent text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8"> {/* Contenedor principal con fondo oscuro */}
      <div className="max-w-5xl mx-auto space-y-12">
        {cardData.map((card, index) => (
          <AnimatedElement
            key={card.name} // Usar un identificador único como el nombre o un ID si lo tienes
            animationClass={`animate-${card.animationBase} animate-duration-[1500ms] animate-ease-out`}
          >
            <div
              className={`
                bg-animated-gradient bg-400x animate-animateBg 
                 
                rounded-xl 
                shadow-2xl 
                overflow-hidden 
                md:flex 
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} // Alterna la dirección en pantallas medianas y grandes
              `}
            >
              {/* Sección de la Imagen */}
              <div className="md:w-2/5 md:flex-shrink-0">
                <img
                  src={card.image}
                  alt={`Entrenador ${card.name}`}
                  className="
                    w-full h-64 object-cover 
                    md:h-full 
                  " // Imagen cubre el contenedor
                />
              </div>

              {/* Sección de Contenido */}
              <div className="p-6 sm:p-8 flex flex-col justify-center md:w-3/5 bg  ">
                <h3 className={`text-2xl sm:text-3xl font-bold ${textColorAmarillo} mb-3`}>
                  {card.name}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {card.description}
                </p>
                <button 
                  className={`
                    mt-6 py-2 px-6 
                    ${borderColor} border-2 
                    ${textColorAmarillo}
                    font-semibold rounded-lg 
                    hover:bg-amarillo hover:text-gray-900 
                    transition-colors duration-300
                    self-start  // Alinea el botón a la izquierda dentro de su contenedor flex
                  `}
                >
                  Saber Más
                </button>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
}

export default ModernTrainerCards;