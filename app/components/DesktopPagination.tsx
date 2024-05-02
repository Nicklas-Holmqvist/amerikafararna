import React from 'react';

import PointerIcon from './PointerIcon';

interface DesktopPaginationProps {
  currentPages: number;
  currentPage: number;
  handlePagination: (page: number) => void;
}

const DesktopPagination: React.FC<DesktopPaginationProps> = ({
  currentPages,
  currentPage,
  handlePagination,
}) => {
  return (
    <nav className="flex flex-row justify-center text-sm pt-10">
      <PointerIcon
        currentPages={currentPages}
        currentPage={currentPage}
        handlePagination={handlePagination}
        direction={'left'}
        size={64}
        alt={'bläddra bakåt'}
      />
      {Array.from({ length: currentPages }, (v, index: number) => (
        <button
          key={index}
          className={`p-2 w-10 h-10 m-1 border transition duration-150  ${
            Number(currentPage) === index + 1
              ? 'bg-green text-basic-white'
              : 'bg-beige'
          }`}
          onClick={() => {
            if (currentPage === index + 1) return;
            else handlePagination(index);
          }}>
          {index + 1}
        </button>
      ))}
      <PointerIcon
        currentPages={currentPages}
        currentPage={currentPage}
        handlePagination={handlePagination}
        direction={'right'}
        size={64}
        alt={'bläddra framåt'}
      />
    </nav>
  );
};

export default DesktopPagination;
