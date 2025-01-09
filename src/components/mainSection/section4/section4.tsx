import AnimatedElement from "./animater";

const rowsData = [
    {
        entrenador: "../../../src/imagenes/entrenador4.jpg",
        animation: "animate-fade-right animate-duration-[2000ms]",
        border: "lg:rounded-l-full  rounded-r-[10px] mb-[50px]",
        flexDirection: "lg:flex-row",
        text: "Hola, soy Gero Arias, un entrenador personal certificado con más de 10 años de experiencia ayudando a personas a alcanzar sus metas de acondicionamiento físico.",
    },
    {
        entrenador: "../../../src/imagenes/entrenador5.jpg",
        animation: "animate-fade-left animate-duration-[2000ms]",
        border: "lg:rounded-r-full rounded-l-4 mb-[50px] ml-[5%]",
        flexDirection: "lg:flex-row-reverse",
        text: "¡Bienvenido/a! Si estás buscando un cambio en tu vida, has llegado al lugar correcto. Como tu entrenador personal, mi misión es inspirarte y motivarte a alcanzar tus objetivos de fitness.",
    },
    {
        entrenador: "../../../src/imagenes/entrenador6.jpg",
        animation: "animate-fade-right animate-duration-[2000ms]",
        border: "lg:rounded-l-full rounded-r-[10px]",
        flexDirection: "lg:flex-row",
        text: "En [Nombre del Gimnasio o Estudio], ofrecemos un enfoque integral para el entrenamiento personal. Nuestros servicios incluyen evaluaciones físicas iniciales, planes de entrenamiento personalizados",
    },
];
function Section4() {



    return (
        <div className="flex flex-col text-left font-serif w-full h-full px-[90px] py-[30px] transparent text-white text-[20px] shadow-[10px_10px_100px_0px_rgba(0,0,0,0.12)]">
            {rowsData.map((row, index) => (
                <AnimatedElement animationClass={row.animation}>
                    {/* tarjeta */}
                    <div
                        key={index}
                        className={`
                            border-[1px] 
                            border-amarillo 
                            items-evenly
                            lg:justify-between 
                            flex 
                            items-center 
                            content-center
                            w-[95%] xl:h-[220px]
                            flex-col 
                            bg-animated-gradient bg-400x animate-animateBg
                            ${row.border} 
                            ${row.flexDirection}`}
                    >
                        {/* Imagen de entrenador */}
                        <div className="flex lg:h-[120%] aspect-square rounded-full  items-center justify-center">
                            <img src={row.entrenador} alt="" className="shadow-lg border-amarillo rounded-full border-[5px] h-[65%] lg:h-[100%] aspect-square" />
                        </div>
                        {/* Texto */}
                        <div className="
                        w-[70%]
                        p-7
                        h-full
                        text-[18px] 
                        sm:text-[24px] 
                        md:text-[26px] 
                        lg:text-[28px] 
                        xl:text-[30px] 
                        mx-6">
                            {row.text}
                        </div>
                    </div>
                </AnimatedElement>

            ))}
        </div>
    )
}
export default Section4;