'use client';

import { useMediaQuery } from 'react-responsive';
import React from 'react';

import DesktopPagination from './DesktopPagination';
import MobilePagination from './MobilePagination';

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
        <MobilePagination
          currentPages={currentPages}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      ) : (
        <DesktopPagination
          currentPages={currentPages}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      )}
    </>
  );
};

export default Pagination;
