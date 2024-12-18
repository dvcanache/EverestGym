import './section.css'


function Section4() {

    return (

        <div className="testimonios">
            <img style={{position: 'absolute', right:'5%', height: '700px',top: '100px'}} src="src\imagenes\testimonio-telefono.png" alt="" />
                <div className = "testimonios-title">
                ¿Qué dicen nuestros clientes?
                </div>
            <div className = 'rejilla'>
                <div className = "testimonios container">
                        <div className='testimonio-pic'> 
                            <img className='testimonio-pic pic' src="src\imagenes\person-circle.png" alt="" />
                        </div>
                        <div className='testimonio-name'>Maria</div>
                    <div>
                    Me encanta este gimnasio. El ambiente es muy motivador y siempre hay gente entrenando. Las instalaciones son limpias y bien mantenidas.
                    </div>
                </div>
                <div className = "testimonios container">
                    <div className='testimonio-pic'>
                        <img className='testimonio-pic pic' src="src\imagenes\person-circle.png" alt="" />
                    </div>
                    <div className='testimonio-name'>Sandra</div>
                    <div>
                    Las clases grupales en este gimnasio son increíbles. He probado varias, desde yoga hasta HIIT
                    </div>
                </div>
                <div className = "testimonios container">
                    <div className='testimonio-pic'>
                        <img className='testimonio-pic pic' src="src\imagenes\person-circle.png" alt="" />
                    </div>
                    <div className='testimonio-name'>Martin</div>
                    <div>
                    Lo que más me gusta de este gimnasio son sus horarios flexibles. Puedo ir a cualquier hora del día y siempre hay espacio para entrenar
                    </div>
                </div>
                <div className = "testimonios container">
                    <div className='testimonio-pic'>
                        <img className='testimonio-pic pic' src="src\imagenes\person-circle.png" alt="" />
                    </div>
                    <div className='testimonio-name'>Pedro</div>
                    <div>
                    Este gimnasio ofrece una excelente relación calidad-precio. Las tarifas son bastante asequibles en comparación con otros lugares en la ciudad
                    </div>
                </div>
                <div className = "testimonios container">
                    <div className='testimonio-pic'>
                        <img className='testimonio-pic pic' src="src\imagenes\person-circle.png" alt="" />
                    </div>
                    <div className='testimonio-name'>David</div>
                    <div>
                        Mi parte favorita es el ambiente que es muy cheveres y acogedor
                    </div>
                </div>
                <div className = "testimonios container">
                    <div className='testimonio-pic'>
                        <img className='testimonio-pic pic' src="src\imagenes\person-circle.png" alt="" />
                    </div>
                    <div className='testimonio-name'>Jose</div>
                    <div>
                        lo que mas me gusta del gimnasio es la variedad de clases que ofrecen y la zona de spinning
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section4