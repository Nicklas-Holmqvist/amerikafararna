import React from 'react';

import SectionHeader from './SectionHeader';
import CountCard from './CountCard';

interface MedianAgeProps {
  median: { title: string; amount: number }[];
  age: { title: string; amount: number }[];
}

const MedianAge: React.FC<MedianAgeProps> = ({ median, age }) => {
  return (
    <section className="max-w-[1400px] w-full py-20 px-4 md:px-12 bg-white flex flex-col">
      <SectionHeader
        title="Vilka var äldst och vad låg medelåldern på för de som emigrerade?"
        span="Endast Älekulla socken"
      />
      <div className="flex flex-row flex-wrap justify-center w-full justify-between md:justify-around lg:justify-between ">
        <div className="flex flex-col w-full sm:w-1/2 pl-4 pr-2 lg:pl-0 lg:pr-14 md:pr-0 sm:pr-8">
          <h5 className="text-center pb-8 text-md underline underline-offset-8">
            Högsta åldern
          </h5>
          <div className="flex flex-row justify-between md:justify-around lg:justify-between">
            {age.map((gender, index) => (
              <CountCard
                key={index}
                data={{
                  title: gender.title,
                  amount: gender.amount,
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 pr-4 pl-2 lg:pr-0 lg:pl-14 md:pl-0 sm:pl-8">
          <h5 className="text-center pb-8 text-md underline underline-offset-8">
            Medelåldern
          </h5>
          <div className="flex flex-row justify-between md:justify-around lg:justify-between">
            {median.map((gender, index) => (
              <CountCard
                key={index}
                data={{
                  title: gender.title,
                  amount: gender.amount,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedianAge;
