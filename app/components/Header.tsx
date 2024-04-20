import React from 'react';
import Link from 'next/link';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <Link href={'/'}>
        <h1 className="text-5xl text-center pt-10">Älekullas Amerikafarare</h1>
      </Link>
    </header>
  );
};

export default Header;
