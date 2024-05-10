import React from 'react';

interface LandingpageHelpProps {}

const LandingpageHelp: React.FC<LandingpageHelpProps> = ({}) => {
  return (
    <section className="max-w-[1400px] py-20 px-12 bg-white flex flex-col items-center">
      <h3 className="pb-4 md:pb-8 text-center text-2xl">
        Vill du hjälpa till?
      </h3>
      <p className="max-w-[85ch] text-sm md:text-md text-center m-auto pb-6">
        Det här projektet är idiellt och drivs på fritiden. Marks härad
        innefattar 24 socknar och för att gå igenom allt uppskattas all hjälp vi
        kan få. Är du intresserad av att hjälpa till hör av dig.
      </p>
      <button className="border py-2 px-4 rounded text-sm md:text-md">
        Kontakta
      </button>
    </section>
  );
};

export default LandingpageHelp;
