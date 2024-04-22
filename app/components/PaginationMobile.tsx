import React from 'react';
import PointerIcon from './PointerIcon';

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
      <PointerIcon
        currentPages={currentPages}
        currentPage={currentPage}
        handlePagination={handlePagination}
        direction={'left'}
        size={64}
        alt={'bläddra bakåt'}
      />

      <button
        className={`p-2 w-10 h-10 m-1 border bg-green text-basic-white hover:none'
      }`}
        onClick={() => {
          return;
        }}>
        {currentPage}
      </button>
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

export default PaginationMobile;
