import "../../sections/section.css";

function Section1() {
  return (
    <>
      <div className=" absolute w-full h-full flex items-center justify-center p-4">
        <div className="flex flex-row gap-[50px] ">
          <div className="w-[450px] flex-1 bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg text-white p-6 rounded-[60px]">
            <h1 className="text-[70px] font-bold">Everest Gym</h1>
            <p className="text-[30px] font-bold">
              Lideres deportivos en el estado
            </p>
            <p>
              Un cuerpo sano es una mente sana, en EverestGym te ayudamos a
              alcanzar tus metas
            </p>
            <button style={{ marginLeft: "30%", marginTop: "10px" }}>
              Unirse Ahora
            </button>
          </div>

          <div className="w-[450px] h-[700px] flex-1 p-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur-lg text-white  p-6 rounded-[60px]">
            <img
              className="object-cover w-full h-full overflow-visible"
              src="src\imagenes\ejercicioilustrado.png"
              alt=""
            />
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            bottom: "27%",
            left: "20%",
            height: "15%",
            width: "50%",
            zIndex: 1,
            marginLeft: "0",
          }}
          src="src\imagenes\flecha.png"
          alt=""
        />
      </div>
    </>
  );
}
export default Section1;
