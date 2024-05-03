import { Links } from './Header';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MailIcon from '../../public/images/mail.svg';

interface DesktopNavigationProps {
  controlPath: (link: Links, pathname: string) => boolean;
  pathname: string;
  links: Links[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  links,
  controlPath,
  pathname,
}) => {
  return (
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
          <a href="mailto:kontakt@markemigranter.se">
            <Image className="" src={MailIcon} alt={'mail ikon'} width="28" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
