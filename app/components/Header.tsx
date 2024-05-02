'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

import MailIcon from '../../public/images/mail.svg';

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
            link={links}
            drawer={drawer}
            pathname={pathname}
            setDrawer={() => setDrawer(!drawer)}
            controlPath={controlPath}
          />
        ) : (
          <nav className="flex">
            <ul className="flex">
              {links.map((link) => (
                <li
                  key={link.path}
                  className={`my-auto mx-4 text-md hover:border-b-2 ${
                    controlPath(link, pathname) ? 'border-b-2 pt-1' : ''
                  } `}>
                  <Link className="p-4" href={link.href}>
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="my-auto ml-6 pr-8">
                <a href="mailto:nicklas_holmqvist@outlook.com">
                  <Image
                    className=""
                    src={MailIcon}
                    alt={'mail ikon'}
                    width="28"
                  />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
