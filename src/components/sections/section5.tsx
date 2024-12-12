import './section.css'


function Section5() {

    return (

        <div className = "formulario" >
            
            <div className='formulario-title'>Contactanos !</div>
            <div className='formulario-container'>
                <div className='formulario-text'>
                <form action="#" method="POST">
                    <div className="form-group">
                        <label form="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required/>
                    </div>
                    <div className="form-group">
                        <label form="email">Gmail:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label form="telefono">Número de Teléfono:</label>
                        <input type="tel" id="telefono" name="telefono" required/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>

                </div>
                <div className='formulario-text'></div>
                
            </div>
            
            
            
        </div>
    )
}
export default Section5