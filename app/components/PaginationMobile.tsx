import { LuArrowBigLeft, LuArrowBigRight } from '@metamist/lucide-react';
import React from 'react';

interface PaginationMobileProps {
  currentPages: number;
  currentPage: number;
  handlePagination: (page: number) => void;
}

const PaginationMobile: React.FC<PaginationMobileProps> = ({
  currentPages,
  currentPage,
  handlePagination,
}) => {
  return (
    <nav className="flex flex-row justify-center text-sm">
      <span
        className="pr-4 pt-2"
        onClick={() => {
          if (currentPage === 1) return;
          else handlePagination(currentPage - 2);
        }}>
        <LuArrowBigLeft size={30} />
      </span>

      <button
        className={`p-2 w-10 h-10 m-1 border bg-green text-basic-white hover:none'
      }`}
        onClick={() => {
          return;
        }}>
        {currentPage}
      </button>
      <span
        className="pl-4 pt-2"
        onClick={() => {
          if (currentPages === currentPage) return;
          else handlePagination(currentPage);
        }}>
        <LuArrowBigRight size={30} />
      </span>
    </nav>
  );
};

export default PaginationMobile;
