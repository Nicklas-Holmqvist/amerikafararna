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
  { title: 'Lista', path: '/list', href: '/list?page=1&search=' },
  { title: 'Karta', path: '/map', href: '/map' },
];

const Header: React.FC<HeaderProps> = ({}) => {
  const pathname = usePathname();
  const mapPath = pathname === '/map';

  const controlPath = (link: Links) => {
    if (pathname === link.path) return true;
    else return false;
  };
  return (
    <header
      className={`h-[6rem]  ${
        mapPath ? 'bg-green text-basic-white' : 'bg-transparent'
      }`}>
      <div className=" h-[6rem] max-w-[1200px] flex content-center justify-between m-auto">
        <h1 className={`text-4xl sm:text-5xl content-center`}>
          <Link className="header-link" href={'/'}>
            Markemigranter
          </Link>
        </h1>
        <nav className="flex">
          <ul className="flex">
            {links.map((link) => (
              <li
                key={link.path}
                className={`my-auto mx-8 p-2 text-md hover:border-b-4 ${
                  controlPath(link) ? 'border-b-4 pt-3' : ''
                } `}>
                <Link className="" href={link.href}>
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
