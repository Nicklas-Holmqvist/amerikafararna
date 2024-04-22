import React from 'react';
import Image from 'next/image';

import pointerIcon from '../../public/images/pointer-icon.svg';

interface PointerIconProps {
  currentPages: number;
  currentPage: number;
  handlePagination: (page: number) => void;
  direction: string;
  size: number;
  alt: string;
}

const PointerIcon: React.FC<PointerIconProps> = ({
  currentPages,
  currentPage,
  handlePagination,
  direction,
  size,
  alt,
}) => {
  return (
    <Image
      className={`pl-4 ${
        direction === 'left'
          ? ' scale-x-[-1] hover:-translate-x-1'
          : 'hover:translate-x-1'
      } cursor-pointer`}
      onClick={() => {
        if (direction === 'left') {
          if (currentPage === 1) return;
          return handlePagination(currentPage - 2);
        } else {
          if (currentPage === currentPages) return;
          return handlePagination(currentPage);
        }
      }}
      height={size}
      width={size}
      src={pointerIcon}
      alt={alt}
    />
  );
};

export default PointerIcon;
