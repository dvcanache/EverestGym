import AnimatedElement from "./animater";

const rowsData = [
    {
        entrenador: "../../../src/imagenes/entrenador4.jpg",
        animation: "animate-fade-right animate-duration-[2000ms]",
        border: "border-l-[60px] mb-[30px] rounded-r-[10px]",
        flexDirection: "lg:flex-row",
        text: "Hola, soy [Tu Nombre], un entrenador personal certificado con más de [X años] de experiencia ayudando a personas a alcanzar sus metas de acondicionamiento físico.",
    },
    {
        entrenador: "../../../src/imagenes/entrenador5.jpg",
        animation: "animate-fade-left animate-duration-[2000ms]",
        border: "border-r-[60px] mb-[30px] rounded-l-[10px]",
        flexDirection: "lg:flex-row-reverse",
        text: "¡Bienvenido/a! Si estás buscando un cambio en tu vida, has llegado al lugar correcto. Como tu entrenador personal, mi misión es inspirarte y motivarte a alcanzar tus objetivos de fitness.",
    },
    {
        entrenador: "../../../src/imagenes/entrenador6.jpg",
        animation: "animate-fade-right animate-duration-[2000ms]",
        border: "border-l-[60px] rounded-r-[10px]",
        flexDirection: "lg:flex-row",
        text: "En [Nombre del Gimnasio o Estudio], ofrecemos un enfoque integral para el entrenamiento personal. Nuestros servicios incluyen evaluaciones físicas iniciales, planes de entrenamiento personalizados",
    },
];
function Section4() {



    return (
        <div className="flex flex-col text-left font-serif w-full h-full px-[90px] py-[30px] bg-[#141414] text-white text-[20px] shadow-[10px_10px_100px_0px_rgba(0,0,0,0.12)]">
            {rowsData.map((row, index) => (
                <AnimatedElement animationClass={row.animation}>
                    {/* tarjeta */}
                    <div
                        key={index}
                        className={`border-[1px] 
                            border-amarillo 
                            p-7 
                            flex 
                            items-center 
                            w-full h-[33%] 
                            flex-col 
                            bg-gradient-to-r from-[#000000] from-10% via-[#0a0a0a] via-30% to-[#000000] to-90%
                            ${row.border} 
                            ${row.flexDirection}`}
                    >
                        {/* Imagen de entrenador */}
                        <div className="flex w-full h-full aspect-square rounded-full  items-center justify-center">
                            <img src={row.entrenador} alt="" className="shadow-lg border-amarillo rounded-full border-[5px] h-[65%] lg:h-[85%]" />
                        </div>
                        {/* Texto */}
                        <div className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] xl:text-[40px] mx-6">
                            {row.text}
                        </div>
                    </div>
                </AnimatedElement>

            ))}
        </div>
    )
}
export default Section4;