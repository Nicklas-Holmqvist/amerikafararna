import React from 'react';

interface ButtonPrimaryProps {
  text: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text }) => {
  return (
    <button className="border  py-2 px-4 rounded bg-green text-sm md:text-md text-white hover:bg-white hover:text-green hover:border-green">
      {text}
    </button>
  );
};

export default ButtonPrimary;
