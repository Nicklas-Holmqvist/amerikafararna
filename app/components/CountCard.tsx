import React from 'react';

interface CountCardProps {
  data: { title: string; amount: number };
}

const CountCard: React.FC<CountCardProps> = ({ data }) => {
  return (
    <figure className="flex flex-col mb-8 md:mb-0 max-w-[10rem] lg:max-w-[15rem] w-full border-x ">
      <h4 className="border-b pb-4 pt-6 text-xl lg:text-3xl text-center bg-schablon bg-repeat bg-small shadow-md">
        {data.title}
      </h4>
      <figcaption className="text-center pb-4 pt-8 text-xl lg:text-2xl">
        {data.amount}
      </figcaption>
    </figure>
  );
};

export default CountCard;
