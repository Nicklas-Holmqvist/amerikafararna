import React from 'react';

interface CountCardProps {
  data: { title: string; amount: number };
}

const CountCard: React.FC<CountCardProps> = ({ data }) => {
  return (
    <figure className="flex flex-col mb-8 md:mb-0 max-w-[10rem] lg:max-w-[15rem] w-full border-x py-6">
      <h4 className="border-b pb-4 text-xl lg:text-3xl text-center">
        {data.title}
      </h4>
      <figcaption className="text-center pt-8 text-xl lg:text-2xl">
        {data.amount}
      </figcaption>
    </figure>
  );
};

export default CountCard;
