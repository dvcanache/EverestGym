import "../../sections/section.css";

function Section1() {
  return (
    <>
      <div className=" absolute w-full h-full flex items-center justify-center p-4">
        <div className="flex flex-row gap-[100px]">
          <div className="flex-1 max-w-[500px] h-[700px] bg-black bg-opacity-75 backdrop-filter backdrop-blur-[10px] text-white p-[30px] pt-[100px] rounded-[60px]">
            <p className="text-[70px] font-bold text-nowrap">Everest Gym</p>
            <p className="text-[30px] font-bold">
              Lideres deportivos en el estado
            </p>
            <p>
              Un cuerpo sano es una mente sana, en EverestGym te ayudamos a
              alcanzar tus metas
            </p>
            <div className="w-full flex justify-center pt-[25px]">
              <button className="bg-amarillo text-black text-base font-bold text px-8 py-3 rounded">
                Unirse Ahora
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-[500px] h-[700px] p-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur-[10px] text-white  p-6 rounded-[60px]">
            <div>
              <img
                className="object-cover w-full h-full overflow-visible"
                src="src\imagenes\ejercicioilustrado.png"
                alt=""
              />
            </div>
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
