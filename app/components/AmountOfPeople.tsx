import React from 'react';

import SectionHeader from './SectionHeader';
import CountCard from './CountCard';

interface AmountOfPeolpProps {
  data: { title: string; amount: number }[];
}

const AmountOfPeople: React.FC<AmountOfPeolpProps> = ({ data }) => {
  return (
    <section className="max-w-[1400px] py-20 px-8 md:px-12 bg-white flex flex-col items-center">
      <SectionHeader
        title="Vilka var det som emigrerade mest, män eller kvinnor?"
        span="Endast Älekulla socken"
      />
      <div className="flex flex-row flex-wrap justify-center w-full justify-between md:justify-around lg:justify-between ">
        {data.map((type, index) => (
          <CountCard key={index} data={type} />
        ))}
      </div>
    </section>
  );
};

export default AmountOfPeople;
