import Link from 'next/link';
import React from 'react';

interface ButtonSecondary {
  text: string;
  href: string;
}

const ButtonSecondary: React.FC<ButtonSecondary> = ({ text, href }) => {
  return (
    <button className="border py-2 px-4 rounded text-sm md:text-md">
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default ButtonSecondary;
