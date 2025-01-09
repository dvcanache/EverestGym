import heroimgs from "../../../mockData/herodata";

const Section1 = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse mt-[70px] bg-black py-16 lg:pt-0 lg:flex-col lg:pb-0">
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
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-[500px] lg:h-full"
            src={heroimgs[0].src}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 h-full">
            <h1 className="mb-5 text-9xl font-bold text-amarillo  sm:leading-none">
              Everest
              <br />
              Training
            </h1>
            <p className="pr-5 mb-5 text-base text-white md:text-lg lg:max-w-lg ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              reiciendis aperiam quo exercitationem. Quis mollitia doloribus id
              amet earum nisi magnam nulla? Ea, quo quos omnis impedit quaerat
              soluta eaque.
            </p>
            <div className="flex items-center">
              <button className="text-base sm:text-base bg-amarillo text-black font-bold px-4 sm:px-10 h-auto py-2 rounded hover:scale-110 transition-all duration-500">
                Unirse <br />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
