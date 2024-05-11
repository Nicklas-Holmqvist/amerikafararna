import Link from 'next/link';
import React from 'react';

interface ButtonSecondary {
  text: string;
  href: string;
}

const ButtonSecondary: React.FC<ButtonSecondary> = ({ text, href }) => {
  return (
    <button className="border pt-2 pb-1 px-4 rounded text-md md:text-lg">
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default ButtonSecondary;
