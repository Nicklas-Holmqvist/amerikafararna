import React from 'react';
import Link from 'next/link';

import { HamburgerButton } from './HamburgerButton';
import { Links } from './Header';

interface MobileNavigationProps {
  drawer: boolean;
  setDrawer: () => void;
  controlPath: (link: Links, pathname: string) => boolean;
  pathname: string;
  link: Links[];
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  setDrawer,
  drawer,
  link,
  pathname,
  controlPath,
}) => {
  return (
    <>
      <HamburgerButton active={drawer} onClick={setDrawer} />

      {drawer ? (
        <aside className="fixed left-0 right-0 top-0 h-screen bg-basic-white z-40">
          <nav className="w-100 h-screen flex flex-col justify-center items-center text-center text-center">
            {link.map((link, index) => (
              <a
                key={index}
                onClick={setDrawer}
                className={`h-10 w-20 mx-8 my-8 text-2xl ${
                  controlPath(link, pathname) ? 'border-b-4 pt-1' : ''
                } `}>
                <Link href={link.href}>{link.title}</Link>
              </a>
            ))}
          </nav>
        </aside>
      ) : null}
    </>
  );
};

export default MobileNavigation;
