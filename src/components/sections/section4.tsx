import React from 'react';


function Section4() {
    return (
        <div className="testimonios relative text-left font-serif w-[85%] h-[80%] p-[110px] pt-[30px] bg-black/90 text-white text-[20px] shadow-lg rounded-[20px]">
            <img className="absolute right-[5%] h-[700px] top-[100px]" src="src/imagenes/testimonio-telefono.png" alt="" />
            <div className="testimonios-title w-full pl-[20px] h-[60px] mb-[30px] font-sans text-[40px] font-extrabold text-white text-left border-l-[10px] border-yellow-500">
                ¿Qué dicen nuestros clientes?
            </div>
            <div className="rejilla grid grid-cols-[15rem_15rem_15rem] gap-4 w-[750px] h-full">
                <div className="testimonios-container overflow-hidden h-[300px] w-[200px] text-left font-montserrat p-[20px] relative bg-black/70 text-white rounded-[30px] border-[3px] border-yellow-500 shadow-lg">
                    <div className="testimonio-pic h-[50px] w-[50px] bg-yellow-500 mb-[10px] rounded-full">
                        <img className="testimonio-pic-pic h-full w-full object-cover" src="src/imagenes/person-circle.png" alt="" />
                    </div>
                    <div className="testimonio-name font-bold text-lg text-center absolute h-[50px] w-[90px] top-[25px] right-[20px]">Maria</div>
                    <div>
                        Me encanta este gimnasio. El ambiente es muy motivador y siempre hay gente entrenando. Las instalaciones son limpias y bien mantenidas.
                    </div>
                </div>
                <div className="testimonios-container overflow-hidden h-[300px] w-[200px] text-left font-montserrat p-[20px] relative bg-black/70 text-white rounded-[30px] border-[3px] border-yellow-500 shadow-lg">
                    <div className="testimonio-pic h-[50px] w-[50px] bg-yellow-500 mb-[10px] rounded-full">
                        <img className="testimonio-pic-pic h-full w-full object-cover" src="src/imagenes/person-circle.png" alt="" />
                    </div>
                    <div className="testimonio-name font-bold text-lg text-center absolute h-[50px] w-[90px] top-[25px] right-[20px]">Sandra</div>
                    <div>
                        Las clases grupales en este gimnasio son increíbles. He probado varias, desde yoga hasta HIIT
                    </div>
                </div>
                <div className="testimonios-container overflow-hidden h-[300px] w-[200px] text-left font-montserrat p-[20px] relative bg-black/70 text-white rounded-[30px] border-[3px] border-yellow-500 shadow-lg">
                    <div className="testimonio-pic h-[50px] w-[50px] bg-yellow-500 mb-[10px] rounded-full">
                        <img className="testimonio-pic-pic h-full w-full object-cover" src="src/imagenes/person-circle.png" alt="" />
                    </div>
                    <div className="testimonio-name font-bold text-lg text-center absolute h-[50px] w-[90px] top-[25px] right-[20px]">Martin</div>
                    <div>
                        Lo que más me gusta de este gimnasio son sus horarios flexibles. Puedo ir a cualquier hora del día y siempre hay espacio para entrenar
                    </div>
                </div>
                <div className="testimonios-container overflow-hidden h-[300px] w-[200px] text-left font-montserrat p-[20px] relative bg-black/70 text-white rounded-[30px] border-[3px] border-yellow-500 shadow-lg">
                    <div className="testimonio-pic h-[50px] w-[50px] bg-yellow-500 mb-[10px] rounded-full">
                        <img className="testimonio-pic-pic h-full w-full object-cover" src="src/imagenes/person-circle.png" alt="" />
                    </div>
                    <div className="testimonio-name font-bold text-lg text-center absolute h-[50px] w-[90px] top-[25px] right-[20px]">Pedro</div>
                    <div>
                        Este gimnasio ofrece una excelente relación calidad-precio. Las tarifas son bastante asequibles en comparación con otros lugares en la ciudad
                    </div>
                </div>
                <div className="testimonios-container overflow-hidden h-[300px] w-[200px] text-left font-montserrat p-[20px] relative bg-black/70 text-white rounded-[30px] border-[3px] border-yellow-500 shadow-lg">
                    <div className="testimonio-pic h-[50px] w-[50px] bg-yellow-500 mb-[10px] rounded-full">
                        <img className="testimonio-pic-pic h-full w-full object-cover" src="src/imagenes/person-circle.png" alt="" />
                    </div>
                    <div className="testimonio-name font-bold text-lg text-center absolute h-[50px] w-[90px] top-[25px] right-[20px]">David</div>
                    <div>
                        Mi parte favorita es el ambiente que es muy cheveres y acogedor
                    </div>
                </div>
                <div className="testimonios-container overflow-hidden h-[300px] w-[200px] text-left font-montserrat p-[20px] relative bg-black/70 text-white rounded-[30px] border-[3px] border-yellow-500 shadow-lg">
                    <div className="testimonio-pic h-[50px] w-[50px] bg-yellow-500 mb-[10px] rounded-full">
                        <img className="testimonio-pic-pic h-full w-full object-cover" src="src/imagenes/person-circle.png" alt="" />
                    </div>
                    <div className="testimonio-name font-bold text-lg text-center absolute h-[50px] w-[90px] top-[25px] right-[20px]">Jose</div>
                    <div>
                        lo que mas me gusta del gimnasio es la variedad de clases que ofrecen y la zona de spinning
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section4;