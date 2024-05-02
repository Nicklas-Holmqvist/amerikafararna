import React from 'react';

import PointerIcon from './PointerIcon';

interface MobilePaginationProps {
  currentPages: number;
  currentPage: number;
  handlePagination: (page: number) => void;
}

const MobilePagination: React.FC<MobilePaginationProps> = ({
  currentPages,
  currentPage,
  handlePagination,
}) => {
  const shortPagination = () => {
    let pageNumbers = [];
    for (let i = 1; i <= currentPages; i++) {
      pageNumbers.push(i);
    }
    if (pageNumbers.length <= 3) {
      return pageNumbers;
    }
    if (currentPage <= 2) return pageNumbers.splice(0, 3);
    if (pageNumbers.length >= 4) return pageNumbers.splice(currentPage - 2, 3);
  };
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
      {shortPagination()?.map((pagination, index) => (
        <button
          key={index}
          className={`p-2 w-10 h-10 m-1 border transition duration-150 ${
            Number(currentPage) === pagination
              ? 'bg-green text-basic-white'
              : 'bg-beige'
          }`}
          onClick={() => {
            if (currentPage === pagination) return;
            else handlePagination(pagination - 1);
          }}>
          {pagination}
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

export default MobilePagination;
