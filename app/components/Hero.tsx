import React from 'react';

import ButtonSecondary from './ButtonSecondary';
import ButtonPrimary from './ButtonPrimary';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className="h-[92vh] md:h-[83vh] flex flex-col justify-center items-center m-auto pb-20">
      <h2 className="text-center text-2xl md:text-4xl">
        Vilka var de, hur många var de?
      </h2>
      <h2 className="text-center text-2xl md:text-4xl">Hur gamla var de?</h2>
      <h5 className="text-xs md:text-sm font-bold pt-10">
        Sök i registret eller hitta på kartan
      </h5>
      <div className="w-[14rem] md:w-[16rem] flex flex-row justify-between items-center pt-6">
        <ButtonPrimary text="Utforska" />
        <ButtonSecondary text="Kartan" />
      </div>
    </section>
  );
};

export default Hero;
