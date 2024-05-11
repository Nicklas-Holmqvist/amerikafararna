import React from 'react';

import SectionHeader from './SectionHeader';
import CountCard from './CountCard';

interface TotalEmiAndImmiProps {
  emigrants: { title: string; amount: number };
  immigrants: { title: string; amount: number };
}

const TotalEmiAndImmi: React.FC<TotalEmiAndImmiProps> = ({
  emigrants,
  immigrants,
}) => {
  return (
    <section className="max-w-[1400px] w-full py-20 px-4 md:px-12 bg-white flex flex-col">
      <SectionHeader
        title="Hur många reste fram och tillbaka?"
        span="Endast Älekulla socken"
      />
      <div className="flex flex-row justify-around">
        <CountCard
          data={{
            title: emigrants.title,
            amount: emigrants.amount,
          }}
        />
        <CountCard
          data={{
            title: immigrants.title,
            amount: immigrants.amount,
          }}
        />
      </div>
    </section>
  );
};

export default TotalEmiAndImmi;
