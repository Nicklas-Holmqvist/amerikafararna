import React from 'react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className="h-[92vh] md:h-[83vh] flex flex-col justify-center items-center m-auto pb-20">
      <h2 className="text-center text-2xl md:text-4xl">
        Vilka var de, hur gamla var de?
      </h2>
      <h2 className="text-center text-2xl md:text-4xl">Hur många var de?</h2>
      <h5 className="text-xs md:text-sm font-bold pt-10">
        Sök i registret eller hitta på kartan
      </h5>
      <div className="w-[14rem] md:w-[16rem] flex flex-row justify-between items-center pt-6">
        <button className="border  py-2 px-4 rounded bg-green text-sm md:text-md text-white hover:bg-white hover:text-green hover:border-green">
          Registret
        </button>
        <button className="border py-2 px-4 rounded text-sm md:text-md">
          Kartan
        </button>
      </div>
    </section>
  );
};

export default Hero;
