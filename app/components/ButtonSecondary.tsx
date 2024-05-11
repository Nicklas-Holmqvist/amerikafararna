import React from 'react';

interface ButtonSecondary {
  text: string;
}

const ButtonSecondary: React.FC<ButtonSecondary> = ({ text }) => {
  return (
    <button className="border py-2 px-4 rounded text-sm md:text-md">
      {text}
    </button>
  );
};

export default ButtonSecondary;
