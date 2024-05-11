import Link from 'next/link';
import React from 'react';

interface ButtonPrimaryProps {
  text: string;
  href: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, href }) => {
  return (
    <button className="border  py-2 px-4 rounded bg-green text-sm md:text-md text-white hover:bg-white hover:text-green hover:border-green">
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default ButtonPrimary;
