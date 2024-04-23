import React from 'react';
import Link from 'next/link';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <Link href={'/'}>
        <h1 className="text-4xl text-center pt-10 sm:text-5xl">
          Markemigranter
        </h1>
      </Link>
    </header>
  );
};

export default Header;
