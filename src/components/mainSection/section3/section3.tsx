import PricingSlider from "./pricingSlider";
function Section3 () {
  return (
    <div className="items-center flex flex-col border-none w-[90%] lg:w-[85%] h-auto lg:h-[80%] p-[40px] lg:p-[50px] bg-transparent text-white text-[20px] lg:text-[40px] rounded-[25px]">

      {/* Primera columna */}
      <div className="p-[30px] backdrop-blur-sm border-[1px] rounded-[40px] flex flex-col w-full lg:w-[70%] h-auto lg:px-[30px] mb-[50px] lg:mb-0">
        <div className="flex flex-col items-center">
          <p className="font-bebas font-bold h-auto text-[26px] lg:text-[40px] w-full lg:w-[80%] text-center">
            Elige el plan que se adapte a tus metas y estilo de vida.
          </p>
        </div>
        <div>
          <p className="font-oswald font-normal lg:mb-[0px] h-auto text-[16px] lg:text-[24px] w-full lg:w-full mt-[10px] text-center">
            En Everest Gym la transformacion es accesible para todos. Inscripcion <span className="text-amarillo">gratis</span> en todos nuestros planes
          </p>
        </div>
      </div>

      {/* Segunda columna */}
      <div className="overflow-hidden flex flex-row justify-between w-full lg:w-[50%]lg:pr-[50px] mb-[50px] lg:mb-0 h-auto">
        <PricingSlider />
      </div>
      
    </div>
  );
};

export default Section3;
