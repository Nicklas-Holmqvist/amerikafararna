import React from 'react';
import Link from 'next/link';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className=" h-[6rem] flex justify-center m-auto">
      <h1 className="text-4xl sm:text-5xl content-center">
        <Link className="header-link" href={'/'}>
          Markemigranter
        </Link>
      </h1>
    </header>
  );
};

export default Header;
