import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <h1 className="text-4xl text-center pt-10">Älekullas amerikafarare</h1>
    </header>
  );
};

export default Header;
