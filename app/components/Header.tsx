'use client';

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

interface HeaderProps {}

export interface Links {
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
  const [drawer, setDrawer] = useState<boolean>(false);

  const mobileView = useMediaQuery({
    query: '(max-width: 1200px)',
  });

  const controlPath = (link: Links, pathname: string) => {
    if (pathname === link.path) return true;
    else return false;
  };
  return (
    <header className={`bg-beige ${mobileView ? 'border-none' : 'border-b-2'}`}>
      <div
        className={`relative h-[6rem] max-w-[1400px] flex content-center justify-between m-auto z-40`}>
        <h1
          className={` h-[6rem] ${
            mobileView ? 'w-full text-center fixed border-b-2 bg-beige' : ''
          } text-4xl sm:text-5xl content-center pl-8`}>
          <Link className="header-link text-color-green" href={'/'}>
            Markemigranter
          </Link>
        </h1>
        {mobileView ? (
          <MobileNavigation
            links={links}
            drawer={drawer}
            pathname={pathname}
            setDrawer={() => setDrawer(!drawer)}
            controlPath={controlPath}
          />
        ) : (
          <DesktopNavigation
            controlPath={controlPath}
            links={links}
            pathname={pathname}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
