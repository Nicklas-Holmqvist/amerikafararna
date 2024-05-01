'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {}

interface Links {
  title: string;
  path: string;
  href: string;
}

const links: Links[] = [
  { title: 'Hem', path: '/', href: '/' },
  { title: 'Sök', path: '/list', href: '/list?page=1&search=' },
  { title: 'Karta', path: '/map', href: '/map' },
  { title: 'Om', path: '/about', href: '/about' },
];

const Header: React.FC<HeaderProps> = ({}) => {
  const pathname = usePathname();
  const mapPath = pathname === '/map';

  const controlPath = (link: Links) => {
    if (pathname === link.path) return true;
    else return false;
  };
  return (
    <header className={`h-[6rem] border-b-2`}>
      <div className="border-x-2 h-[6rem] max-w-[1400px] flex content-center justify-between m-auto">
        <h1 className={`text-4xl sm:text-5xl content-center pl-8`}>
          <Link className="header-link text-color-green" href={'/'}>
            Markemigranter
          </Link>
        </h1>
        <nav className="flex">
          <ul className="flex">
            {links.map((link) => (
              <li
                key={link.path}
                className={`my-auto mx-8 text-md hover:border-b-2 ${
                  controlPath(link) ? 'border-b-2 pt-1' : ''
                } `}>
                <Link className="p-4" href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
