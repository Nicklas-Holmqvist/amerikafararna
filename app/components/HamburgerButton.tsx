import React from 'react';
import { LuMenu } from '@metamist/lucide-react';

interface HamburgerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  active,
  ...props
}) => {
  return (
    <button {...props} className="fixed top-[1.4rem] left-4 z-50 bg-beige">
      <LuMenu size={36} />
    </button>
  );
};
