import React from 'react';

import ButtonSecondary from './ButtonSecondary';
import ButtonPrimary from './ButtonPrimary';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className="h-[65vh] flex flex-col justify-center items-center m-auto">
      <h2 className="text-center text-2xl sm:text-3xl md:text-5xl">
        Vilka var de, hur många var de?
      </h2>
      <h2 className="text-center text-2xl sm:text-3xl md:text-5xl pt-1 md:pt-4">
        Hur gamla var de?
      </h2>
      <h5 className="text-xs md:text-sm font-bold pt-10">
        Sök i registret eller hitta på kartan
      </h5>
      <div className="w-[14rem] md:w-[16rem] flex flex-row justify-between items-center pt-4 md:pt-8">
        <ButtonPrimary text="Utforska" href="/list?page=1&search=" />
        <ButtonSecondary text="Kartan" href="/map" />
      </div>
    </section>
  );
};

export default Hero;
