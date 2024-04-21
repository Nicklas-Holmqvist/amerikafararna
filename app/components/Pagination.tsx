'use client';

import React from 'react';
import { LuArrowBigLeft, LuArrowBigRight } from '@metamist/lucide-react';
import PaginationMobile from './PaginationMobile';
import { useMediaQuery } from 'react-responsive';

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
          <span
            className="pr-4 pt-2"
            onClick={() => {
              if (currentPage === 1) return;
              else handlePagination(currentPage - 2);
            }}>
            <LuArrowBigLeft size={30} />
          </span>
          {Array.from({ length: currentPages }, (v, index: number) => (
            <button
              key={index}
              className={`p-2 w-10 h-10 m-1 border ${
                Number(currentPage) === index + 1
                  ? 'bg-green text-basic-white'
                  : ''
              }`}
              onClick={() => {
                handlePagination(index);
              }}>
              {index + 1}
            </button>
          ))}
          <span
            className="pl-4 pt-2"
            onClick={() => {
              if (currentPages === currentPage) return;
              else handlePagination(currentPage);
            }}>
            <LuArrowBigRight size={30} />
          </span>
        </nav>
      )}
    </>
  );
};

export default Pagination;
