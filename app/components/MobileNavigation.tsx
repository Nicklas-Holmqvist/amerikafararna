import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
  const mobileMenuVariant = {
    opened: {
      x: '0%',
      opacity: 1,
      transition: {
        delay: 0.15,
        duration: 0.7,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      x: '-100%',
      opacity: 0,
      transition: {
        delay: 0.35,
        duration: 0.35,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  return (
    <motion.nav initial="closed" animate={drawer ? 'opened' : 'closed'}>
      <HamburgerButton active={drawer} onClick={setDrawer} />
      <motion.aside
        variants={mobileMenuVariant}
        className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-basic-white border-r-4 z-40`}>
        <motion.div className="flex flex-col bg-basic-white text-center">
          {link.map((link, index) => (
            <a
              key={index}
              onClick={setDrawer}
              className={`h-10 w-16 mx-8 my-8 text-xl ${
                controlPath(link, pathname) ? 'border-b-4 pt-1' : ''
              } `}>
              <Link href={link.href}>{link.title}</Link>
            </a>
          ))}
        </motion.div>
      </motion.aside>
    </motion.nav>
  );
};

export default MobileNavigation;
