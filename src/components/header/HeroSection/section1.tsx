import heroimgs from "../../../mockData/herodata";

const Section1 = () => {
  return (
    <>
      <div className="relative flex flex-col mt-[70px] lg:bg-black py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        {/* Imagen para telefono */}
        <div
          className="absolute inset-0 z-0 lg:hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroimgs[0].src})`,
            filter: "brightness(0.5)",
          }}
        ></div>

        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-0 md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 z-50 hidden h-full text-black transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M 45 0 L 95 101 H 49 L -2 0 Z" />
          </svg>
          <svg
            className="absolute left-0 hidden h-full text-amarillo transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M 50 0 H 50 L 100 100 H 50 L 0 0 Z" />
          </svg>
          <img
            className="object-cover hidden w-full h-full lg:block lg:shadow-none lg:h-full"
            src={heroimgs[0].src}
            alt="Hero background"
          />
        </div>

        <div className="z-10 flex flex-col items-start">
          <div className="mb-16 pl-[10%]">
            <h1 className="mb-5 text-6xl font-bold text-amarillo sm:leading-none sm:text-8xl">
              Everest
              <br />
              Training
            </h1>
            <p className="pr-5 mb-5 text-base text-white md:text-lg lg:max-w-md xl:max-w-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              reiciendis aperiam quo exercitationem. Quis mollitia doloribus id
              amet earum nisi magnam nulla? Ea, quo quos omnis impedit quaerat
              soluta eaque.
            </p>
            <div className="flex items-center space-x-4 pl-3 sm:space-x-8 w-[35%] min-w-[100px]">
              <button className="max-w-[180px] font-oswald font-black flex items-center justify-center leading-none no-underline text-black text-lg w-[100%] h-10 transition-[0.3s] hover:skew-x-[-13deg] skew-x-[-20deg] bg-[#fee705] rounded-[2px] border-[3px] border-transparent">
                Unirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
