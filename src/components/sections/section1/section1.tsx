import './section1.css'


function Section1() {

    return (

        <div className="section1">
            <div className="section1 textcontainer">
                <h1 className='section1-title'>Everest Gym</h1>
                <p className='section1-subtitle'>Lideres deportivos en el estado</p>
                <p>Un cuerpo sano es una mente sana, en EverestGym te ayudamos a alcanzar tus metas</p>
                <button style={{ marginLeft: '30%', marginTop: '10px' }}>Unirse Ahora</button>


            </div>
            <div className="section1 imgcontainer">
                <img className='section1 img' src="src\imagenes\ejercicioilustrado.png" alt="" />

            </div>
            <img style={{ position: 'absolute', bottom: '27%', left: '20%', height: '15%', width: '50%', zIndex: 999, marginLeft: '0', }} src="src\imagenes\flecha.png" alt="" />
        </div>
    )
}
export default Section1