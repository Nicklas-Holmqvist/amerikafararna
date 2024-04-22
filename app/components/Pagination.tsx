'use client';

import { useMediaQuery } from 'react-responsive';
import React from 'react';

import PaginationMobile from './PaginationMobile';
import PointerIcon from './PointerIcon';

interface PaginationProps {
  currentPages: number;
  currentPage: number;
  handlePagination: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPages,
  currentPage,
  handlePagination,
}) => {
  const mobileView = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  return (
    <>
      {mobileView ? (
        <PaginationMobile
          currentPages={currentPages}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      ) : (
        <nav className="flex flex-row justify-center text-sm">
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
              className={`p-2 w-10 h-10 m-1 border ${
                Number(currentPage) === index + 1
                  ? 'bg-green text-basic-white'
                  : ''
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
      )}
    </>
  );
};

export default Pagination;
